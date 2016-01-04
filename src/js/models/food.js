var app = app || {};

app.Food = Backbone.Model.extend({
  defaults: {
    name: '',
    servings: 0,
    calories: 0,
    fiber: 0,
    protein: 0,
    sodium: 0,
    sugar: 0,
    fat: 0,
    carbs: 0,
    calcium: 0,
    vitA: 0,
    vitC: 0
  }
});