import scrapy
import re

class GithubSpider(scrapy.Spider):
  name = 'github'

  def start_requests(self):
    func = self.parse_resultcnt
    urls = self.gen_urls(q="stars")
