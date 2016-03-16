var app = app || {};

app.TrackerView = Backbone.View.extend({
  el: '#trackerdiv',
  trackerTemplate: _.template($('#tracker-template').html()),
  initialize: function() {
    this.listenTo(app.foodList, 'update', this.render);
  },

  render: function() {
    var self = this;
    var totals = this.calcTotals(app.foodList);
    console.log(totals);
    this.$el.html(this.trackerTemplate({
      totalcals: totals.totalCals,
      totalfiber: totals.totalFiber,
      totalprotein: totals.totalProtein,
      totalsodium: totals.totalSodium,
      totalsugar: totals.totalSugar,
      totalfat: totals.totalFat,
      totalcarbs: totals.totalCarbs,
      totalvita: totals.totalVitA + '%',
      totalvitc: totals.totalVitC + '%',
      totalcalcium: totals.totalCalcium + '%'
    }));

    self.renderProgressBar(totals.totalVitA, 'vit-a');
    self.renderProgressBar(totals.totalVitC, 'vit-c');
    self.renderProgressBar(totals.totalCalcium, 'calcium');
  },

  renderProgressBar: function(total, bartype) {
    if(total >= 100) {
      $('.progress-bar.' + bartype).css('width', '100%');
    } else {
      $('.progress-bar.' + bartype).css('width', total + '%');
    }
  },

  calcTotals: function(collection) {
    var totals = {};
    totals.totalCals = collection.reduce(function(memo, value) { return memo + value.get("totalCals"); }, 0);
    totals.totalFiber = collection.reduce(function(memo, value) { return memo + value.get("fiber"); }, 0);
    totals.totalProtein = collection.reduce(function(memo, value) { return memo + value.get("protein"); }, 0);
    totals.totalSodium = collection.reduce(function(memo, value) { return memo + value.get("sodium"); }, 0);
    totals.totalSugar = collection.reduce(function(memo, value) { return memo + value.get("sugar"); }, 0);
    totals.totalFat = collection.reduce(function(memo, value) { return memo + value.get("fat"); }, 0);
    totals.totalCarbs = collection.reduce(function(memo, value) { return memo + value.get("carbs"); }, 0);
    totals.totalVitA = collection.reduce(function(memo, value) { return memo + value.get("vitA"); }, 0);
    totals.totalVitC = collection.reduce(function(memo, value) { return memo + value.get("vitC"); }, 0);
    totals.totalCalcium = collection.reduce(function(memo, value) { return memo + value.get("calcium"); }, 0);

    return totals;
  }

});