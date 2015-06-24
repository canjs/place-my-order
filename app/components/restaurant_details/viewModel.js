import can from 'can';
import 'can/map/define/';

import Restaurant from 'models/restaurant';

var RestaurantDetailsViewModel = can.Map.extend({
  define: {
    restaurant: {
      get: function() {
        var slug = this.attr('slug');
        return Restaurant.findOne({id: slug});
      }
    }
  }
});

export default RestaurantDetailsViewModel;