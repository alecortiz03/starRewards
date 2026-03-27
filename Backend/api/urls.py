from django.urls import path
from .views import (
    NinjaListCreateView,
    NinjaUsernameSearchView,
    NinjaStars,
)

urlpatterns = [
    path("ninjas/", NinjaListCreateView.as_view(), name="ninja-list-create"),
    path('ninjas/search/', NinjaUsernameSearchView.as_view(), name='ninja-search'),
    path('ninjas/<int:pk>/stars/', NinjaStars.as_view(), name='ninja-stars'),

]