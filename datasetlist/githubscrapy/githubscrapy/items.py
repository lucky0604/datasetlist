# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class GithubscrapyItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    project_name = scrapy.Field()
    category = scrapy.Field()
    year = scrapy.Field()
    desc = scrapy.Field()
    license_desc = scrapy.Field()
    stars = scrapy.Field()
    contributors = scrapy.Field()
