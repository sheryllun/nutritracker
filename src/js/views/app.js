var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#nutritracker-app',
  events: {
    'click #search': 'searchFood',
    'keyup #food-input': 'searchFood',
    'click .result' : 'getFoodId'
  },
  resultsTemplate: _.template($('#results-template').html()),
  initialize: function() {
    this.$input = this.$('#food-input');
    this.$results = this.$('#results-list');
    this.singleFoodsArray = [];
    this.foodId = '';
  },
  searchFood: function() {
    var search = this.$input.val().trim();
    var self = this;
    var params = {
      'results': '0:5',
      'fields': '*',
      'appKey': 'ba5c22dd374e75a04c9bbd9d5e89c273',
      'appId': 'b898ecf9'
    };

    $.ajax({
      url: 'https://api.nutritionix.com/v1_1/search/' + search,
      data: params,
      success: function(data) {
        if(data.hits.length > 0) {
          self.displayResults(data.hits);
        }
      },
      error: function() {
        console.log('error');
      }
    });
  },
  displayResults: function(result) {
    var self = this;
    var foodDetails = {};
    this.$results.html('');
    
    for(var i=0; i < result.length; i++) {
      var food = result[i].fields;
      foodDetails = {
        id: food.item_id,
        name: food.item_name,
        brand: food.brand_name,
        serveQty: food.nf_serving_size_qty,
        serveUnit: food.nf_serving_size_unit,
        calories: food.nf_calories
      };

      this.$results.append(this.resultsTemplate({
        name: foodDetails.name,
        brand: foodDetails.brand,
        servingSize: foodDetails.serveQty,
        servingUnit: foodDetails.serveUnit,
        calories: foodDetails.calories,
        id: foodDetails.id
      }));
    }
  },
  //On click of an individual food, get the id and pass it to new single food view
  getFoodId: function(e) {
    var foodId = $(e.currentTarget).data('id');
    this.clearDetails();
    var singleFood = new app.SingleFoodDescriptionView(foodId);
    this.singleFoodsArray.push(singleFood);
    this.foodId = foodId;
  },

  //Removes any existing SingleFood views
  clearDetails: function() {
    var children = this.singleFoodsArray;
    for (var i = 0, l = children.length; i<l; i++) {
      children[i].remove();
    }
    this.singleFoodsArray = [];
    return this;
  }
  
});