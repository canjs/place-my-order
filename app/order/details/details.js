var OrderDetailsViewModel = can.Map.extend({});

can.Component.extend({
  tag: 'pmo-order-details',
  viewModel: OrderDetailsViewModel,
  template: can.view('order/details/details.stache')
});
