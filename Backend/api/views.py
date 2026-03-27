from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Ninjas
from .serializers import NinjasSerializer


class NinjaListCreateView(APIView):
    def get(self, request):
        ninjas = Ninjas.objects.all()
        serializer = NinjasSerializer(ninjas, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = NinjasSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
class NinjaUsernameSearchView(APIView):
    def get(self, request):
        query = request.GET.get('q', '').strip()

        if not query:
            return Response([])

        ninjas = Ninjas.objects.filter(username__icontains=query)[:10]
        serializer = NinjasSerializer(ninjas, many=True)
        return Response(serializer.data)
class NinjaStars(APIView):
    def patch(self, request, pk):
        try:
            ninja = Ninjas.objects.get(pk=pk)
        except Ninjas.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        stars = request.data.get('stars')
        if stars is not None:
            ninja.stars = stars
            ninja.save()
            serializer = NinjasSerializer(ninja)
            return Response(serializer.data)

        return Response({"error": "Stars value is required."}, status=status.HTTP_400_BAD_REQUEST)