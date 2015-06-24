import can from 'can';
import VM from './viewModel';
import template from './restaurant_list.stache!';

can.Component.extend({
  tag: 'pmo-restaurant-list',
  viewModel: VM,
  template: template
});
