# Generated by Django 3.2.16 on 2024-08-04 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feed',
            name='like_count',
            field=models.IntegerField(),
        ),
    ]
