from django.shortcuts import render
from django.http import HttpResponse
from .models import Song
from .serializers import SongSerializer
from rest_framework import generics

# Create your views here.

def index(request):
    return HttpResponse("Welcome to the music player app")

class SongList(generics.ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer