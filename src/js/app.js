var app = app || {};

new app.FoodListView({ collection: app.foodList });
new app.TrackerView({ collection: app.foodList });
new app.AppView();
new app.Router();
Backbone.history.start();