from django.db import models



# class Menu(models.Model):
#     restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
#     name = models.CharField(max_length=100)

#     def __str__(self):
#         return self.name

# class MenuItem(models.Model):
#     menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
#     name = models.CharField(max_length=100)
#     description = models.TextField()
#     price = models.DecimalField(max_digits=8, decimal_places=2)

#     def __str__(self):
#         return self.name

# class Reservation(models.Model):
#     restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
#     table = models.ForeignKey(Table, on_delete=models.CASCADE)
#     customer_name = models.CharField(max_length=100)
#     date = models.DateField()
#     time = models.TimeField()
#     guests = models.IntegerField()

#     def __str__(self):
#         return f"{self.customer_name} - {self.date} ({self.restaurant.name})"

# class Order(models.Model):
#     restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
#     table = models.ForeignKey(Table, on_delete=models.CASCADE)
#     items = models.ManyToManyField(MenuItem, through='OrderItem')
#     is_completed = models.BooleanField(default=False)

#     def __str__(self):
#         return f"Order ({self.restaurant.name})"

# class OrderItem(models.Model):
#     order = models.ForeignKey(Order, on_delete=models.CASCADE)
#     item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
#     quantity = models.IntegerField()

#     def __str__(self):
#         return f"{self.item.name} ({self.order.restaurant.name})"