# Generated by Django 5.0.3 on 2024-03-25 15:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_task_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='user',
            new_name='user_id',
        ),
    ]
