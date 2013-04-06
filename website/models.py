from django.db import models

class User(models.Model):
	email = models.CharField(max_length = 100)
	summary_length = models.IntegerField()

class ReplyEmail(models.Model):
	reply_text = models.TextField()
	user = models.ForeignKey(User)
	users_to_ignore = models.TextField() # this will be a comma delimited string
	