var app = app || {};

app.SingleFoodDescriptionView = Backbone.View.extend({
  el: '#singlefooddiv',
  foodDescriptionTemplate: _.template($('#food-detail-template').html()),
  events: {
    'click #addfood': 'addFood'
  },
  initialize: function(data) {
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
    console.log(app.AppView.foodId);
     var foodDetails = {
        name: food.item_name,
        brand: food.brand_name,
        serveQty: food.nf_serving_size_qty,
        serveUnit: food.nf_serving_size_unit,
        calories: food.nf_calories,
        calcium: food.nf_calcium_dv = 'null' ? 0 : food.nf_calcium_dv,
        fiber: food.nf_dietary_fiber = 'null' ? 0 : food.nf_dietary_fiber,
        protein: food.nf_protein,
        sodium: food.nf_sodium,
        sugar: food.nf_sugars = 'null' ? 0 : food.nf_sugars,
        fat: food.nf_total_fat,
        carbs: food.nf_total_carbohydrate,
        vitA: food.nf_vitamin_a_dv = 'null' ? 0 : food.nf_vitamin_a_dv,
        vitC: food.nf_vitamin_c_dv = 'null' ? 0 : food.nf_vitamin_c_dv
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
    console.log('added');
    var servings = $(this).prev('#servings').val();
    if(!servings) { return; }

    var foodName = "test food";
    app.foodList.create({ name: foodName, servings: servings});
  }
});