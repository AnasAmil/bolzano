from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.conf import settings  
from django.conf.urls.static import static  

router = routers.DefaultRouter()

urlpatterns = router.urls


urlpatterns += [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls'))
]

if settings.DEBUG:  
        urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)  