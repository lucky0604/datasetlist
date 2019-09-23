# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import pymysql as pq
from datetime import datetime

class GithubscrapyPipeline(object):
    def __init__(self):
        # home mac
        # self.conn = pq.connect(host = 'localhost', user = 'root', passwd = 'lovezt520', db = 'dataset', charset = 'utf8')
        # company's PC
        self.conn = pq.connect(host = 'localhost', user = 'root', passwd = '111111', db = 'dataset', charset = 'utf8')
        self.cur = self.conn.cursor()

    def process_item(self, item, spider):
        project_name = item.get('project_name').split('/')[1]
        contributor = item.get('project_name').split('/')[0]
        category = item.get('category')
        desc = item.get('desc').strip()
        license_desc = item.get('license_desc').split()[0]
        stars = item.get('stars')[1].split()[0]
        
        sql = "insert into datasetlist(project_name, category, desc_info, license_desc, stars, contributor_user, project_year, created_at) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        self.cur.execute(sql, (project_name, category, desc, license_desc, stars, contributor, None, datetime.now()))
        self.conn.commit()

    def close_spider(self, spider):
        self.cur.close()
