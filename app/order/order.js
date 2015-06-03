var OrderViewModel = can.Map.extend({
  define: {
    slug: {
      type: 'string'
    },
    order: {
      Value: Order
    },
    saveStatus: {
      Value: Object
    },
    activeTab: {
      value: 'lunch'
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

  toggle: function(item, add) {
    var items = this.attr('order.items');
    var index = items.indexOf(item);
    if(add && index === -1) {
      items.push(item);
    } else {
      items.splice(index, 1);
    }
  },

  placeOrder: function() {
    var order = this.attr('order');
    this.attr('saveStatus', order.save());
    return false;
  },

  setActiveTab: function(newVal) {
    this.attr('activeTab', newVal);
  }
});

can.Component.extend({
  tag: 'pmo-order',
  viewModel: OrderViewModel,
  template: can.view('order/order.stache')
});
