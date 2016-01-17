var app = app || {};

app.FoodListView = Backbone.View.extend({
  listTemplate: _.template($('#food-list-template').html()),
  initialize: function() {
    this.listenTo(app.foodList, 'add', this.addOne);
  },

  addOne: function(food) {
    var view = new app.FoodItemView({ model: food });
    $('#listdiv').append(view.render().el);
  }
}); 