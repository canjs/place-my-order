import can from 'can';
import VM from './viewModel';
import template from './order.stache!';

can.Component.extend({
  tag: 'pmo-order',
  viewModel: VM,
  template: template
});
