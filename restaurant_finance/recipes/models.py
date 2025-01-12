from django.db import models

class Ingredient(models.Model):
    name = models.CharField(max_length=255)
    cost_per_unit = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class Recipe(models.Model):
    name = models.CharField(max_length=255)
    ingredients = models.ManyToManyField(Ingredient, through='RecipeIngredient')

    def __str__(self):
        return self.name
    

def estimated_cost(self):
        total_cost = 0
        for recipe_ingredient in self.recipeingredient_set.all():
            ingredient_cost = recipe_ingredient.ingredient.cost_per_unit
            quantity = recipe_ingredient.quantity_per_recipe
            total_cost += ingredient_cost * quantity
        return total_cost

class RecipeIngredient(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity_per_recipe = models.DecimalField(max_digits=10, decimal_places=2)
    unit = models.CharField(max_length=50, default='kg')

    def __str__(self):
        return f"{self.quantity_per_recipe} of {self.ingredient.name} in {self.recipe.name}"
