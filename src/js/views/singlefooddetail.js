var app = app || {};

app.SingleFoodDescriptionView = Backbone.View.extend({
  el: '#singlefooddiv',
  foodDescriptionTemplate: _.template($('#food-detail-template').html()),
  events: {
    'click #addfood': 'addFood'
  },
  initialize: function(data) {
    this.$input = this.$('#servings');
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
        console.log(data);
        self.render(data);
      },
      error: function() {
        console.log('single food error');
      }
    });

  },
  render: function(data) {
    var food = data;
     var foodDetails = {
        name: food.item_name,
        brand: food.brand_name,
        serveQty: food.nf_serving_size_qty,
        serveUnit: food.nf_serving_size_unit,
        calories: food.nf_calories,
        calcium: food.nf_calcium_dv = (food.nf_calcium_dv === null) ? 0 : food.nf_calcium_dv,
        fiber: food.nf_dietary_fiber = (food.nf_dietary_fiber === null) ? 0 : food.nf_dietary_fiber,
        protein: food.nf_protein,
        sodium: food.nf_sodium,
        sugar: food.nf_sugars = (food.nf_sugars === null) ? 0 : food.nf_sugars,
        fat: food.nf_total_fat,
        carbs: food.nf_total_carbohydrate,
        vitA: food.nf_vitamin_a_dv = (food.nf_vitamin_a_dv === null) ? 0 : food.nf_vitamin_a_dv,
        vitC: food.nf_vitamin_c_dv = (food.nf_vitamin_c_dv === null) ? 0 : food.nf_vitamin_c_dv
      };

      this.$el.html(this.foodDescriptionTemplate({
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

  addFood: function(e) {
    var servings = parseInt($('#servings').val());
    if(!servings) { return; }

    var foodName = $('.item-name').text();
    var calories = parseInt($('.calories').text());
    var fiber = parseFloat($('.fiber').text());
    var protein = parseFloat($('.protein').text());
    var sodium = parseFloat($('.sodium').text());
    var sugar = parseFloat($('.sugar').text());
    var carbs = parseFloat($('.carbs').text());
    var fat = parseFloat($('.fat').text());
    var calcium = parseFloat($('.calcium').text());
    var vita = parseFloat($('.vita').text());
    var vitc = parseFloat($('.vitc').text());

    app.foodList.create({ 
      name: foodName, 
      servings: servings, 
      calories: calories,
      fiber: fiber,
      protein: protein,
      sodium: sodium,
      sugar: sugar,
      carbs: carbs,
      fat: fat,
      calcium: calcium,
      vitA: vita,
      vitC: vitc
    });
    
    $('#servings').val('');
    location.href = '#mylist';
  }
});