import scrapy
import re
import json

class GithubAPISpider(scrapy.Spider):
    name = 'githubapi'

    def start_requests(self):
        urls = [
            'https://api.github.com/search/repositories?q=dataset+language:python+stars:>=1000&sort=stars&order=desc',
        ]
        for url in urls:
            yield scrapy.Request(url = url, callback=self.parse)

    def parse(self, response):
        yield json.loads(response.body)

