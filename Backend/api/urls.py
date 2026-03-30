from django.urls import path
from .views import (
    NinjaListCreateView,
    NinjaUsernameSearchView,
    NinjaStars,
    NinjaUpdateFirstName,
    NinjaUpdateLastName,
    NinjaUpdateUsername,
)

urlpatterns = [
    path("ninjas/", NinjaListCreateView.as_view(), name="ninja-list-create"),
    path('ninjas/search/', NinjaUsernameSearchView.as_view(), name='ninja-search'),
    path('ninjas/<int:pk>/stars/', NinjaStars.as_view(), name='ninja-stars'),
     path("ninjas/<int:pk>/first-name/", NinjaUpdateFirstName.as_view(), name="ninja-update-first-name"),
    path("ninjas/<int:pk>/last-name/", NinjaUpdateLastName.as_view(), name="ninja-update-last-name"),
    path("ninjas/<int:pk>/username/", NinjaUpdateUsername.as_view(), name="ninja-update-username"),

]