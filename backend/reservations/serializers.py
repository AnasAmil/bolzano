from rest_framework import serializers
from .models import Reservation
from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer

class ReservationSerializer(serializers.ModelSerializer):
    restaurant = serializers.PrimaryKeyRelatedField(queryset=Restaurant.objects.all())
    restaurant_info = RestaurantSerializer(source='restaurant', read_only=True)
    class Meta:
        model = Reservation
        fields = [
            'id',
            'restaurant',
            'restaurant_info',
            'table',
            'customer_name',
            'date',
            'time',
            'guests',
        ]

    
