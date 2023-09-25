from django.urls import path
from . import views

urlpatterns = [
    path('', views.reservation_list_create_view),
    path('<int:pk>/delete/', views.reservation_delete_view)
]