var app=app||{};app.FoodListView=Backbone.View.extend({initialize:function(){this.listenTo(app.foodList,"add",this.addOne),this.listenTo(app.foodList,"remove",this.checkCollection)},render:function(t){return $(".foodlist").html(""),t.each(function(t){var e=new app.FoodItemView({model:t,collection:this.collection});$(".foodlist").append(e.render().el)}),this},addOne:function(){$(".intro-text").hide();var t=app.currentDate,e=this.collection.byDate(t);this.render(e)},checkCollection:function(){0===this.currCollection.length&&$(".intro-text").show()}});