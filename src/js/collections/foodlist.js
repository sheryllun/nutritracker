var app = app || {};

var FoodList = Backbone.Firebase.Collection.extend({
  model: app.Food,
  url: 'https://shining-inferno-5.firebaseio.com/'
});

app.foodList = new FoodList();