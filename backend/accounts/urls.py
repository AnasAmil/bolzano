from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.account_create_view),
    path('<str:username>/', views.account_detail_view)
]