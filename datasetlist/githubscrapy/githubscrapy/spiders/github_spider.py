import scrapy
import json
from githubscrapy.items import GithubscrapyItem

class GithubSpider(scrapy.Spider):
    name = 'github'
    
    def start_requests(self):
        func = self.parse
        urls = self.gen_urls(q="dataset", expr=">500", s="stars", stop=10)
        for url in urls:
            yield scrapy.Request(url=url, callback=func)
            
    def gen_urls(self, q=None, *, expr=None, s=None, start=1, stop, l="all"):
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

        urls = ['https://github.com/search?p={p}&o=desc&q={q}&s={s}:"{expr}"&type={type}&l={l}&utf8=%E2%9C%93'.format(p=p, expr=expr, q=q, s=s, type=type, l=l)
                for p in range(start, stop)]

        return urls

    def parse(self, response):
        print(response, ' --------------- response --------------')
        for index, repo in enumerate(response.css('.repo-list').xpath("//ul[contains(@class, 'repo-list')]/li")):
            item = GithubscrapyItem()
            item['stars'] = repo.xpath('./div/div/a[@class="muted-link"]/text()').getall()
            item['category'] = repo.xpath('./div/div/div/span/span/text()').get()
            item['project_name'] = "".join(repo.xpath('./div/h3/a[@class="v-align-middle"]/descendant::text()').getall())
            item['desc'] = repo.xpath('./div/p/text()').get()
            item['license_desc'] = repo.xpath('./div/div/p/text()').get()
            yield item