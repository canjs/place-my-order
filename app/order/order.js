var OrderViewModel = can.Map.extend({
  define: {
    /**
     * @property {String} slug
     *
     * The restaurants slug (short name). Will
     * be used to request the actual restaurant.
     */
    slug: {
      type: 'string'
    },
    /**
     * @property {pmo/models/order} order
     *
     * The order that is being processed. Will
     * be an empty new order inititally.
     */
    order: {
      Value: Order
    },
    /**
     * @property {can.Deferred} saveStatus
     *
     * A deferred that contains the status of the order when
     * it is being saved.
     */
    saveStatus: {
      Value: Object
    },
    /**
     * @property {String} activeTab
     */
    activeTab: {
      value: 'lunch'
    },
    /**
     * @property {can.Deferred} restaurant
     *
     * The restaurant instance as a Deferred.
     */
    restaurant: {
      /**
       * Returns a Deferred that gets a restaurant based on the `slug`
       * set in this component and sets the orders restaurant id.
       *
       * @param {can.Deferred} old The previous value
       * @returns {can.Deferred}
       */
      get: function(old) {
        var id = this.attr('slug');

        if (!old && id) {
          var setOrderSlug = can.proxy(function(restaurant){
            this.attr('order.slug', restaurant.attr('slug'));
            return restaurant;
          }, this);

          // this.attr('@root').pageData('restaurant', { id: id }, dfd);
          return Restaurant.findOne({ id: id }).then(setOrderSlug);
        }

        return old;
      }
    }
  },

  /**
   * Adds or removed an item from the order.
   *
   * @param {Object} item The menu item to use
   * @param {Boolean} add Whether to add or remove the item
   */
  toggle: function(item, add) {
    var items = this.attr('order.items');
    var index = items.indexOf(item);
    if(add && index === -1) {
      items.push(item);
    } else {
      items.splice(index, 1);
    }
  },

  /**
   * Save the current order and update the status Deferred.
   *
   * @returns {boolean} false to prevent the form submission
   */
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
