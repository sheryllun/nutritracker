var app = app || {};

app.FoodItemView = Backbone.View.extend({
  tagName: 'li',
  itemTemplate: _.template($('#food-item-template').html()),
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    console.log(this.model.toJSON());

    this.$el.html(this.itemTemplate({
      name: this.model.toJSON().name,
      servings: this.model.toJSON().servings,
      calories: this.calcTotalCals()
      }
    ));
    return this;
  },

  calcTotalCals: function() {
    return this.model.toJSON().servings * this.model.toJSON().calories;
  }
});