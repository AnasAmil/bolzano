from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UserSerializer

class AccountDetailAPIView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field= 'username'

account_detail_view = AccountDetailAPIView.as_view()

class AccountCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

account_create_view = AccountCreateAPIView.as_view()


