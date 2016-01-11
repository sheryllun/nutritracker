var app = app || {};

app.FoodItemView = Backbone.View.extend({
  tagName: 'li',
  itemTemplate: _.template($('#food-item-template').html()),
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    this.$el.html(this.itemTemplate(this.model.attributes));
    return this;
  }
});