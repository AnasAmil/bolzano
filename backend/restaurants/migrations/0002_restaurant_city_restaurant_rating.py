# Generated by Django 4.1.5 on 2023-06-18 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='city',
            field=models.CharField(default='Casablanca', max_length=30),
        ),
        migrations.AddField(
            model_name='restaurant',
            name='rating',
            field=models.FloatField(default=0.0),
        ),
    ]
