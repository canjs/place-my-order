import can from 'can';
import template from './order_list.stache!';

can.Component.extend({
  tag: 'pmo-orders-list',
  viewModel: can.Map.extend({}),
  template: template
});
