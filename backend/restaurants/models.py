from django.db import models

class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    city = models.CharField(max_length=30, default='Casablanca')
    rating = models.FloatField(default=0.0)
    image = models.ImageField(null=True, upload_to='images')

    def __str__(self):
        return self.name
    
class Table(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    number = models.IntegerField()
    capacity = models.IntegerField()

    def __str__(self):
        return f"Table {self.number} ({self.restaurant.name})"
