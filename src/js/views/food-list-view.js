var app = app || {};

app.FoodListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(app.foodList, 'add', this.addOne);
    this.listenTo(app.foodList, 'remove', this.checkCollection);

  },

  render: function(items) {
    $('.foodlist').html('');
    items.each(function(food) {
      var view = new app.FoodItemView( {model: food, collection: this.collection });
    $('.foodlist').append(view.render().el);
    });
    return this;
  },

  addOne: function() {
    $('.intro-text').hide();
    var date = app.currentDate;
    var currCollection = this.collection.byDate(date);
    console.log(currCollection);
    this.render(currCollection);
  },

  checkCollection: function() {
    if(this.currCollection.length === 0) {
      $('.intro-text').show();
    }
  }
}); 