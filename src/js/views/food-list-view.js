var app = app || {};

app.FoodListView = Backbone.View.extend({
  listTemplate: _.template($('#food-list-template').html()),
  initialize: function() {
    this.$list = this.$('#listdiv');
    this.listenTo(this.collection, 'add', this.addOne);
  },

  addOne: function(food) {
    var view = new app.FoodItemView({ model: app.Food });
    this.$list.append(view.render().el);
  }
}); 