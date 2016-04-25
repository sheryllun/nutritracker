var app = app || {};
  app.checkDate = function() {
    var date = new Date();
    var year = (date.getFullYear()).toString();
    var month = (date.getMonth() + 1).toString();
    var day = (date.getDate()).toString();
    if(month.length === 1) {
      month = "0" + month;
    }
    if(day.length === 1) {
      day = "0" + day;
    }
    return month + day + year;
  };

  app.currentDate = app.checkDate();

new app.FoodListView({ collection: app.foodList });
new app.TrackerView({ collection: app.foodList });
new app.AppView();
new app.Router();
Backbone.history.start();