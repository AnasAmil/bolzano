from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('', views.restaurant_list_create_view),
    path('<int:pk>/update/', views.restaurant_update_view),
    path('<int:pk>/delete/', views.restaurant_delete_view),
    path('<int:pk>/', views.restaurant_detail_view)
]