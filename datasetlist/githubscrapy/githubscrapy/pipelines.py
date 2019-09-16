# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


class GithubscrapyPipeline(object):
    def process_item(self, item, spider):
        print('============== pipeline ==============')
        print(item)
        print('-------------- pipeline --------------')
        return item
