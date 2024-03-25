from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    PRIORITY_CHOICES = [
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High'),
    ]
    STATUS_CHOICES = [
        ('Open', 'Open'),
        ('In Progress', 'In Progress'),
        ('Completed', 'Completed'),
    ]

    task_name = models.TextField()
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES)
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    description=models.CharField(max_length=200, blank=True)  
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)  
    def __str__(self):
        return self.task_name
