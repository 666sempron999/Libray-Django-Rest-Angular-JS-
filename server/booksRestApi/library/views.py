from library.models import Author, Book
from .serializers import AuthorSerializer, BooksSerializer
from rest_framework import viewsets
from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticatedOrReadOnly
# from rest_framework_swagger.views import get_swagger_view
import django_filters.rest_framework
# from rest_framework import filters


# schema_view = get_swagger_view(title='Book site api')


class AuthorViewSet(viewsets.ModelViewSet):

    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    # filter_backends = (filters.OrderingFilter,)
    # ordering_fields = ('first_name', 'last_name')



class BookViewSet(viewsets.ModelViewSet):

    queryset = Book.objects.all()
    serializer_class = BooksSerializer
    # filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
    # filter_backends = (filters.SearchFilter,)
    # search_fields = ('author__first_name', 'author__last_name', \
    #     'title', 'description', 'year_of_creating')