var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#nutritracker-app',
  events: {
    'click #search': 'searchFood',
    'keyup #food-input': 'searchFood'
  },
  resultsTemplate: _.template($('#results-template').html()),
  initialize: function() {
    this.$input = this.$('#food-input');
    this.$results = this.$('#results-list');
  },
  searchFood: function() {
    search = this.$input.val().trim();
    params = {
      'results': '0:5',
      'fields': '*',
      'appKey': 'ba5c22dd374e75a04c9bbd9d5e89c273',
      'appId': 'b898ecf9'
    };

    $.ajax({
      url: 'https://api.nutritionix.com/v1_1/search/' + search,
      data: params,
      success: function(data) {
        console.log(data);
      },
      error: function() {
        console.log('error');
      }
    });
  },
  displayResults: function(result) {

  }
});