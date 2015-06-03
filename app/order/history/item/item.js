var OrderHistoryItemViewModel = can.Map.extend({});

can.Component.extend({
  tag: 'pmo-order-history-item',
  viewModel: OrderHistoryItemViewModel,
  template: can.view('order/history/item/item.stache')
});
