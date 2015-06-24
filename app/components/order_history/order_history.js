import can from 'can';
import VM from './viewModel';
import template from './order_history.stache!';

can.Component.extend({
  tag: 'pmo-order-history',
  viewModel: VM,
  template: template
});
