var PMORestaurantDetailsViewModel = can.Map.extend({
  define: {
    restaurant: {
      get: function() {
        var slug = this.attr('slug');
        return Restaurant.findOne({id: slug});
      }
    }
  }
});

can.Component.extend({
  tag: 'pmo-restaurant-details',
  viewModel: PMORestaurantDetailsViewModel,
  template: can.view('restaurant/details/details.stache')
});
