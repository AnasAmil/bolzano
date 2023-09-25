from rest_framework import serializers
from .models import Restaurant, Table


class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = '__all__'

class RestaurantSerializer(serializers.ModelSerializer):
    tables = serializers.SerializerMethodField()
    class Meta:
        model = Restaurant
        fields = [
            'id',
            'name',
            'address',
            'city',
            'phone',
            'rating',
            'image',
            'tables',
        ]
    
    def get_tables(self, obj):
        tables_query = Table.objects.filter(restaurant_id=obj.id)
        serializer = TableSerializer(tables_query, many=True)
        return serializer.data
    
class RestaurantPrimaryKeySerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id']
