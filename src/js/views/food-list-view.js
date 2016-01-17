var app = app || {};

app.FoodListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(app.foodList, 'add', this.addOne);
  },

  addOne: function(food) {
    var view = new app.FoodItemView({ model: food });
    $('.foodlist').append(view.render().el);
  }
}); 