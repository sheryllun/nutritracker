var app = app || {};

app.SingleFoodDescriptionView = Backbone.View.extend({
  el: '#nutritracker-app',
  events: {
    'click .results': 'clearDetails'
  },
  foodDescriptionTemplate: _.template($('#food-detail-template').html()),
  initialize: function(data) {
    this.$singleFood = this.$('#singlefooddiv');
    this.getFoodDetails(data);
  },
  getFoodDetails: function(foodid) {
    var self = this;
    var params = {
      'appKey': 'ba5c22dd374e75a04c9bbd9d5e89c273',
      'appId': 'b898ecf9'
    };

    $.ajax({
      url: 'https://api.nutritionix.com/v1_1/item?id=' + foodid,
      data: params,
      success: function(data) {
        self.displaySingleFood(data);
      },
      error: function() {
        console.log('single food error');
      }
    });

  },
  displaySingleFood: function(data) {
    var food = data;
    console.log(food.item_name);

     var foodDetails = {
        name: food.item_name,
        brand: food.brand_name,
        serveQty: food.nf_serving_size_qty,
        serveUnit: food.nf_serving_size_unit,
        calories: food.nf_calories,
        calcium: food.nf_calcium_dv,
        fiber: food.nf_dietary_fiber,
        protein: food.nf_protein,
        sodium: food.nf_sodium,
        sugar: food.nf_sugar,
        fat: food.nf_total_fat,
        carbs: food.nf_total_carbohydrates,
        vitA: food.nf_vitamin_a_dv,
        vitC: food.nf_vitamin_c_dv
      };

      this.$singleFood.append(this.foodDescriptionTemplate({
        name: foodDetails.name,
        brand: foodDetails.brand,
        servingSize: foodDetails.serveQty,
        servingUnit: foodDetails.serveUnit,
        calories: foodDetails.calories,
        calcium: foodDetails.calcium,
        fiber: foodDetails.fiber,
        protein: foodDetails.protein,
        sodium: foodDetails.sodium,
        sugar: foodDetails.sugar,
        fat: foodDetails.fat,
        carbs: foodDetails.carbs,
        vitA: foodDetails.vitA,
        vitC: foodDetails.vitC
      }));

    console.log(foodDetails);
  },
  clearDetails: function() {
    this.$singleFood.html('');
  }
});