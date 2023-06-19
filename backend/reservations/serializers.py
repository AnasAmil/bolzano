from rest_framework import serializers
from .models import Reservation
from restaurants.serializers import RestaurantSerializer

class ReservationSerializer(serializers.ModelSerializer):
    restaurant = RestaurantSerializer(many=False)
    class Meta:
        model = Reservation
        fields = [
            'id',
            'restaurant',
            'table',
            'customer_name',
            'date',
            'time',
            'guests'
        ]
