var app=app||{};app.FoodItemView=Backbone.View.extend({tagName:"li",itemTemplate:_.template($("#food-item-template").html()),events:{"click .remove":"removeFood"},initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){return this.$el.html(this.itemTemplate({name:this.model.toJSON().name,servings:this.model.toJSON().servings,calories:this.calcTotalCals()})),this},removeFood:function(){this.model.destroy(),this.remove()},calcTotalCals:function(){return this.model.toJSON().servings*this.model.toJSON().calories}});