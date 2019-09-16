# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import json

class ApiscrapyPipeline(object):
    def process_item(self, item, spider):
        print('---------------- this is item ------------------')
        print(json.dumps(item))
        print(' ================== pipeline ========================')
        return item
