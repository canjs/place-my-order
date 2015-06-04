var OrderHistoryItemViewModel = can.Map.extend({});

can.Component.extend({
  tag: 'pmo-orders-list',
  viewModel: OrderHistoryItemViewModel,
  template: can.view('order/list/list.stache')
});
