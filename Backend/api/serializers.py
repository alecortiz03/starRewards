from rest_framework import serializers
from .models import Ninjas

class NinjasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ninjas
        fields = '__all__'