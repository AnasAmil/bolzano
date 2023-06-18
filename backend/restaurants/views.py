from .models import Restaurant
from rest_framework import generics, mixins, permissions, authentication
from .models import Restaurant
from .permissions import IsStaffEditorPermission
from api.authentication import TokenAuthentication
from .serializers import RestaurantSerializer

class RestaurantListCreateAPIView(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    authentication_classes = [
            authentication.SessionAuthentication,
            TokenAuthentication
        ]
    # permission_classes = [permissions.IsAdminUser, IsStaffEditorPermission]

    def perform_create(self, serializer):
        # serializer.save(user=self.request.user)
        serializer.save()

restaurant_list_create_view = RestaurantListCreateAPIView.as_view()

class RestaurantDetailAPIView(generics.RetrieveAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

restaurant_detail_view = RestaurantDetailAPIView.as_view()

class RestaurantUpdateAPIView(generics.UpdateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [permissions.DjangoModelPermissions]
    lookup_field= 'pk'


restaurant_update_view = RestaurantUpdateAPIView.as_view()

class RestaurantDeleteAPIView(generics.DestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_field= 'pk'


restaurant_delete_view = RestaurantDeleteAPIView.as_view()  

# class RestaurantMixinView(
#             mixins.ListModelMixin,
#             mixins.RetrieveModelMixin,
#             mixins.CreateModelMixin,
#             mixins.UpdateModelMixin,
#             mixins.DestroyModelMixin,
#             generics.GenericAPIView
#         ):
    
#     queryset = Restaurant.objects.all()
#     serializer_class = RestaurantSerializer
#     lookup_field= 'pk'

#     def get(self, request, *args, **kwargs):
#         pk = kwargs.get("pk")
#         if pk is not None:
#             return self.retrieve(request, *args, **kwargs)
#         return self.list(request, *args, **kwargs)
    
#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)
    
#     def put(self, request, *args, **kwargs):
#         return self.update(request, *args, **kwargs)
    
#     def delete(self, request, *args, **kwargs):
#         return self.destroy(request, *args, **kwargs)
    
    
# restaurant_mixin_view = RestaurantMixinView.as_view()
