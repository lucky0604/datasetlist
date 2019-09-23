import os
from flask_sqlalchemy import sqlalchemy

class TestDB:
    def __init__(self):
        self.db_name = os.environ['DATABASE_NAME'] + 'test'
        self.db_host = os.environ['DB_HOST']
        self.db_root_password = os.environ['MYSQL_ROOT_PASSWORD']
        if self.db_root_password:
            self.db_username = 'root'
            self.db_password = 'lovezt520'
        else:
            self.db_username = 'root'
            self.db_password = 'lovezt520'
        self.db_uri = 'mysql+pymysql://%s:%s@%s' % (
            self.db_username,
            self.db_password,
            self.db_host
        )
    
    def create_db(self):
        # create the database if root user
        if self.db_root_password:
            engine = sqlalchemy.create_engine(self.db_uri)
            conn = engine.connect()
            conn.execute('COMMIT')
            conn.execute('CREATE DATABASE ' + self.db_name)
            conn.close()
        
    def drop_db(self):
        # drop the database if root user
        if self.db_root_password:
            engine = sqlalchemy.create_engine(self.db_uri)
            conn = engine.connect()
            conn.execute('COMMIT')
            conn.execute('DROP DATABASE ' + self.db_name)
            conn.close()