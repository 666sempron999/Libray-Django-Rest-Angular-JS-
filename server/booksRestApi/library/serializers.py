from rest_framework import serializers
from library.models import Author, Book


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('id', 'first_name', 'last_name')


class BooksSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = ('author', 'title', 'description', 'year_of_creating')



