from django.contrib import admin
from django.urls import path
from home import views
from .views import Taskclass,SpecificTask

urlpatterns = [
   path('api/register/',views.register,name ='register'),
   path('api/login/',views.login,name='login'),
   path('api/task/',Taskclass.as_view()),
   path('api/task/<int:task_id>/',SpecificTask.as_view())
]
