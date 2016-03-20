var app = app || {};

var FoodList = Backbone.Firebase.Collection.extend({
  model: app.Food,
  initialize: function(model, options) {
    //create a new date for today and add it as a firebase child
    var today = this.checkDate();
    var ref = new Firebase('https://shining-inferno-5.firebaseio.com/');
    this.url = ref + '/' + today;
  },
  checkDate: function() {
    var date = new Date();
    var year = (date.getFullYear()).toString();
    var month = (date.getMonth() + 1).toString();
    var day = (date.getDate()).toString();
    return month + day + year;
  }
});

app.foodList = new FoodList();