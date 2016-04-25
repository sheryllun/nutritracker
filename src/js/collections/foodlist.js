var app = app || {};

app.FoodList = Backbone.Firebase.Collection.extend({
  model: app.Food,
  url: 'https://shining-inferno-5.firebaseio.com/',
  byDate: function(date) {
    return _(this.filter(function (food) {
      return food.get("dateAdded") === date;
    }));
  }
});

app.foodList = new app.FoodList();