var app = app || {};

app.FoodListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(app.foodList, 'add', this.addOne);
    this.listenTo(app.foodList, 'remove', this.checkCollection);
  },

  addOne: function(food) {
    var view = new app.FoodItemView({ model: food });
    $('.intro-text').hide();
    //Renders the template in food-item-view.js and appends it to the list view
    $('.foodlist').append(view.render().el);
  },

  checkCollection: function() {
    if(this.collection.length === 0) {
      $('.intro-text').show();
    }
  }
}); 