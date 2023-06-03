from django.contrib import admin
from .models import Restaurant, Table, Menu, MenuItem, Reservation, Order, OrderItem

admin.site.register(Restaurant)
admin.site.register(Table)
admin.site.register(Menu)
admin.site.register(MenuItem)
admin.site.register(Reservation)
admin.site.register(Order)
admin.site.register(OrderItem)
