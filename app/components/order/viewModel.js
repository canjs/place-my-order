import can from 'can';
import 'can/map/define/';

import Order from 'models/order';
import Restaurant from 'models/restaurant';

var OrderViewModel = can.Map.extend({
  define: {
    slug: {
      type: 'string'
    },
    order: {
      Value: Order
    },
    restaurant: {
      get: function(old) {
        var id = this.attr('slug');

        if (!old && id) {
          var setOrderSlug = can.proxy(function(restaurant){
            this.attr('order.slug', restaurant.attr('slug'));
            return restaurant;
          }, this);

          return Restaurant.findOne({ id: id }).then(setOrderSlug);
        }

        return old;
      }
    }
  },

  placeOrder: function() {
    var order = this.attr('order');
    this.attr('saveStatus', order.save());
    return false;
  },

  startNewOrder: function() {
    this.attr('order', new Order());
    this.attr('saveStatus', null);
    return false;
  }
});

export default OrderViewModel;