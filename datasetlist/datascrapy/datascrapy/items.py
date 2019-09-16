# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class ImageItem(scrapy.Item):
    image_urls = scrapy.Field()

class LanguageItem(scrapy.Item):
    language = scrapy.Field()
    language_cnt = scrapy.Field()

class RepoItem(scrapy.Item):
    repo = scrapy.Field()
    repo_watch = scrapy.Field()
    repo_star = scrapy.Field()
    repo_fork = scrapy.Field()

class ResultCntItem(scrapy.Item):
    result_cnt = scrapy.Field()

class UserItem(scrapy.Item):
    user = scrapy.Field()
    user_repo = scrapy.Field()
    user_star = scrapy.Field()
    user_follower = scrapy.Field()
    user_following = scrapy.Field()