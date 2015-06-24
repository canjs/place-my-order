import can from 'can';
import VM from './viewModel';
import template from './restaurant_details.stache!';

can.Component.extend({
  tag: 'pmo-restaurant-details',
  viewModel: VM,
  template: template
});
