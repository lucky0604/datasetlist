import scrapy
import re

class GithubSpider(scrapy.Spider):
    name = 'github'
    
    def start_requests(self):
        func = self.parse_resultcnt
        urls = self.gen_urls(q="stars", expr = "> 500", s = "stars", stop = 2)
        for url in urls:
            yield scrapy.Request(url = url, callback = func)
            
    def gen_urls(self, q = None, *, expr = None, s = None, start = 1, stop, l = "all"):
        '''
        urls参数
        :param expr: str
        查询表达式
        forks, repos, stars, followers: "> 10000 < 100000", ">= 1000"
        location: "China", "UA"

        :param q:str
        查询的内容
        Users类：repos, followers, location
        Repos 类：forks, stars, size

        :param s: str(默认为best match)
        查询的内容按某个值排序
        Users类：repositores, followers
        Repos类：stars, forks

        :param start: int(默认从第一页开始)
        查询内容的起始页数

        :param stop: int
        查询内容的结束页数

        :param l: str(默认为全部语言all)
        查询的语言
        Python, C++, C#, JavaScript, Java

        :return: 组装的urls列表
        '''
        type = ' '
        if q in ['stars', 'forks']:
            type = 'Repositories'
        elif q in ['followers', 'repos', 'location']:
            type = 'Users'

        urls = ['https://github.com/search?p={p}&o=desc&q={q}:"{expr}"&s={s}&type={type}&l={l}&utf8=%E2%9C%93'.format(p=p, expr = expr, q = q, s = s, type = type, l = l)
                for p in range(start, stop)]
        return urls

    def prepare_repos(self, response):
        '''
        解析仓库类查询的列表，并回调给下一级解析方法
        '''
        html = response.body.decode('utf-8')
        repos = re.findall(r'(?<="v-align-middle">)[\w\/\-\.]+', html)

        for repo in repos:
            yield scrapy.Request(url="https://github.com/{}".format(repo), callback=self.parse_forks_stars)

    def prepare_users(self, response):
        '''
        解析用户类查询的列表，并回调给下一级解析方法
        '''
        html = response.body.decode('utf-8')
        users = re.findall(r'(?<=ml-2\">\n\s{6}<a href=\")\S+(?=\">)', html)

        for user in users:
            yield scrapy.Request(url="https://github.com{}".format(user), callback=self.parse_user)

    def parse_forks_stars(self, response):
        '''
        解析具体仓库的forks和stars的数据
        '''
        html = response.body.decode('utf-8')
        repo_data = re.findall(r'(?<=aria-label=\")\d+', html)
        try:
            item = repoitems.Item()
            item['repo'] = response.url
            item['repo_watch'], item['repo_star'], item['repo_fork'] = repo_data
            yield item
        except ValueError as e:
            print("ValueError: {}".format(e))