var app=app||{};app.AppView=Backbone.View.extend({el:"#nutritracker-app",events:{"click #search":"searchFood","keyup #food-input":"searchFood","click .result":"getFoodId"},resultsTemplate:_.template($("#results-template").html()),initialize:function(){this.$input=this.$("#food-input"),this.$results=this.$("#results-list"),this.singleFoodsArray=[],this.foodId="",$("#datepicker").datepicker()},remove:function(e){return e.$el.empty().off(),e.stopListening(),this},searchFood:function(){var e=this.$input.val().trim(),t=this,i={results:"0:10",fields:"*",appKey:"ba5c22dd374e75a04c9bbd9d5e89c273",appId:"b898ecf9"};$(".search-intro").hide(),$.ajax({url:"https://api.nutritionix.com/v1_1/search/"+e,data:i,success:function(e){e.hits.length>0&&t.displayResults(e.hits)},error:function(){}})},displayResults:function(e){var t={};this.$results.html("");for(var i=0;i<e.length;i++){var s=e[i].fields;t={id:s.item_id,name:s.item_name,brand:s.brand_name,serveQty:s.nf_serving_size_qty,serveUnit:s.nf_serving_size_unit,calories:s.nf_calories},this.$results.append(this.resultsTemplate({name:t.name,brand:t.brand,servingSize:t.serveQty,servingUnit:t.serveUnit,calories:t.calories,id:t.id}))}},getFoodId:function(e){var t=$(e.currentTarget).data("id");this.clearDetails();var i=new app.SingleFoodDescriptionView(t);this.singleFoodsArray.push(i),this.foodId=t,location.href="#details",$("#food-input").val("")},clearDetails:function(){for(var e=this.singleFoodsArray,t=0,i=e.length;i>t;t++)this.remove(e[t]);return this.singleFoodsArray=[],this}});