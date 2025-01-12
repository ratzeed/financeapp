# Generated by Django 5.1.4 on 2025-01-11 02:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipeingredient',
            old_name='quantity',
            new_name='quantity_per_recipe',
        ),
        migrations.RemoveField(
            model_name='ingredient',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='ingredient',
            name='unit',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='description',
        ),
        migrations.AddField(
            model_name='recipeingredient',
            name='unit',
            field=models.CharField(default='kg', max_length=50),
        ),
        migrations.AlterField(
            model_name='ingredient',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.DeleteModel(
            name='ActualCost',
        ),
    ]
