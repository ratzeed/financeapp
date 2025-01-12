from rest_framework import serializers
from .models import Recipe, Ingredient, RecipeIngredient

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name', 'price', 'quantity']


class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)

    class Meta:
        model = Recipe
        fields = ['id', 'name', 'ingredients', 'estimated_cost']


class RecipeSerializer(serializers.ModelSerializer):
    estimated_cost = serializers.ReadOnlyField()
    class Meta:
        model = Recipe
        fields = ['id', 'name', 'ingredients', 'estimated_cost']