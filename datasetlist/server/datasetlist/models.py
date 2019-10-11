# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models



# class DatasetCategory(models.Model):
#     CATEGORY_INFO = (
#         ('1', 'CV'),
#         ('2', 'NLP'),
#         ('3', 'Self-driving'),
#         ('4', 'QA'),
#         ('5', 'Audio'),
#         ('6', 'Medical')
#     )
#     index = models.IntegerField(unique=True, auto_created=True, default=0)
#     cateinfo = models.CharField(max_length=10, default='', choices=CATEGORY_INFO)


class Datasetlist(models.Model):
    CATEGORY_INFO = (
        ('cv', 'CV'),
        ('nlp', 'NLP'),
        ('selfdriving', 'Self-driving'),
        ('qa', 'QA'),
        ('audio', 'Audio'),
        ('medical', 'Medical')
    )

    id = models.AutoField(primary_key=True)
    project_name = models.CharField(max_length=100)
    category = models.CharField(max_length=100, blank=True, null=True)
    desc_info = models.CharField(max_length=255, blank=True, null=True)
    license_desc = models.CharField(max_length=100, blank=True, null=True)
    stars = models.CharField(max_length=11, blank=True, null=True)
    contributor_user = models.CharField(max_length=20, blank=True, null=True)
    project_year = models.CharField(max_length=20, blank=True, null=True)
    created_at = models.CharField(max_length=40, blank=True, null=True)
    cateinfo = models.CharField(max_length=10, default='', choices=CATEGORY_INFO)

