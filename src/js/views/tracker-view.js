var app = app || {};

app.TrackerView = Backbone.View.extend({
  el: '#trackerdiv',
  trackerTemplate: _.template($('#tracker-template').html()),
  initialize: function() {
    this.listenTo(app.foodList, 'update', this.render);
  },

  render: function() {
    var totalCalories = this.calcTotalCals(app.foodList);

    this.$el.html(this.trackerTemplate({
      totalcals: totalCalories
    }));
  },

  calcTotalCals: function(collection) {
    return collection.reduce(function(memo, value) { return memo + value.get("totalCals"); }, 0);
  }

});