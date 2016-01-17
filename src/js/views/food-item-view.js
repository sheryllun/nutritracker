var app = app || {};

app.FoodItemView = Backbone.View.extend({
  tagName: 'li',
  itemTemplate: _.template($('#food-item-template').html()),
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    console.log(this.model.toJSON().name);
    this.$el.html(this.itemTemplate({
      name: this.model.toJSON().name
    }));
    return this;
  }
});