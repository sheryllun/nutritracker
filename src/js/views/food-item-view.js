var app = app || {};

app.FoodItemView = Backbone.View.extend({
  tagName: 'li',
  itemTemplate: _.template($('#food-item-template').html()),
  events: {
    'click .remove': 'removeFood'
  },
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    console.log(this.model.toJSON());

    this.$el.html(this.itemTemplate({
      name: this.model.toJSON().name,
      servings: this.model.toJSON().servings,
      calories: this.model.toJSON().totalCals
      }
    ));
    return this;
  },

  removeFood: function() {
    this.model.destroy();
    this.remove();
  }
});