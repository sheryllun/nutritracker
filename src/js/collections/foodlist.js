var app = app || {};

app.FoodList = Backbone.Firebase.Collection.extend({
  model: app.Food
});