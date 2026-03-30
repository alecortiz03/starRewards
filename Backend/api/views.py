from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
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

        ninjas = Ninjas.objects.filter(
            Q(username__icontains=query) |
            Q(firstName__icontains=query) |
            Q(lastName__icontains=query)
        )[:10]
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
   
class NinjaUpdateFirstName(APIView):
    def patch(self, request, pk):
        try:
            ninja = Ninjas.objects.get(pk=pk)
        except Ninjas.DoesNotExist:
            return Response(
                {"error": "Ninja not found."},
                status=status.HTTP_404_NOT_FOUND
            )

        first_name = request.data.get("firstName")

        if first_name is None:
            return Response(
                {"error": "firstName is required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        ninja.firstName = first_name
        ninja.save()

        serializer = NinjasSerializer(ninja)
        return Response(serializer.data)


class NinjaUpdateLastName(APIView):
    def patch(self, request, pk):
        try:
            ninja = Ninjas.objects.get(pk=pk)
        except Ninjas.DoesNotExist:
            return Response(
                {"error": "Ninja not found."},
                status=status.HTTP_404_NOT_FOUND
            )

        last_name = request.data.get("lastName")

        if last_name is None:
            return Response(
                {"error": "lastName is required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        ninja.lastName = last_name
        ninja.save()

        serializer = NinjasSerializer(ninja)
        return Response(serializer.data)


class NinjaUpdateUsername(APIView):
    def patch(self, request, pk):
        try:
            ninja = Ninjas.objects.get(pk=pk)
        except Ninjas.DoesNotExist:
            return Response(
                {"error": "Ninja not found."},
                status=status.HTTP_404_NOT_FOUND
            )

        username = request.data.get("username")

        if username is None:
            return Response(
                {"error": "username is required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        ninja.username = username
        ninja.save()

        serializer = NinjasSerializer(ninja)
        return Response(serializer.data)