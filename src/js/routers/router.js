var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    'details': 'showFoodDetail',
    'mylist': 'showList',
    'mytracker': 'showTracker'
  },

  showFoodDetail: function() {
    $('#listdiv, #trackerdiv').hide();
    $('#singlefooddiv').show();
  },

  showList: function() {
    $('#singlefooddiv, #trackerdiv').hide();
    $('#listdiv').show();  },

  showTracker: function() {
    $('#listdiv, #singlefooddiv').hide();
    $('#trackerdiv').show();
  }
});