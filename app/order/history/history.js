var HistoryViewModel = can.Map.extend({
  define: {
    orders: {
      get: function(){
        return Order.findAll({});
      }
    }
  }
});

can.Component.extend({
  tag: 'pmo-order-history',
  viewModel: HistoryViewModel,
  template: can.view('order/history/history.stache')
});
