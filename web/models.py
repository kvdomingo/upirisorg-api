from django.db import models


class Member(models.Model):
    first_name = models.CharField(max_length=64)
    middle_name = models.CharField(max_length=64, blank=True)
    last_name = models.CharField(max_length=64)
    personal_email = models.EmailField()
    up_email = models.EmailField()
    contact_number = models.BigIntegerField()
    college = models.CharField(max_length=256)
    year = models.SmallIntegerField()
    course = models.CharField(max_length=255)
    birthday = models.DateField()
    photography_field = models.TextField()
    facebook = models.CharField(max_length=64, blank=True, verbose_name='Facebook username')
    twitter = models.CharField(max_length=64, blank=True, verbose_name='Twitter username (without @)')
    instagram = models.CharField(max_length=64, blank=True, verbose_name='Instagram username (without @)')
    website = models.CharField(max_length=256, blank=True)

    def __str__(self):
        return f'{self.last_name}, {self.first_name} ({self.up_email})'
