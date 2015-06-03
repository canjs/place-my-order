var PMORestaurantDetailsViewModel = can.Map.extend({
});

can.Component.extend({
  tag: 'pmo-restaurant-details',
  viewModel: PMORestaurantDetailsViewModel,
  template: can.view('restaurant/details/details.stache')
});