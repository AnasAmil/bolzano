from rest_framework import generics
from .models import Reservation
from .serializers import ReservationSerializer
from api.authentication import TokenAuthentication
from rest_framework import authentication

class ReservationListCreateAPIView(generics.ListCreateAPIView):
   queryset = Reservation.objects.all()
   serializer_class = ReservationSerializer
   authentication_classes = [
            authentication.SessionAuthentication,
            TokenAuthentication
        ]

reservation_list_create_view = ReservationListCreateAPIView.as_view()


class ReservationDeleteAPIView(generics.DestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    lookup_field= 'pk'


reservation_delete_view = ReservationDeleteAPIView.as_view()