import can from 'can';
import 'can/map/define/';

import State from 'models/state';
import City from 'models/city';
import Restaurant from 'models/restaurant';

var RestaurantListViewModel = can.Map.extend({
  define: {
    states: {
      get: function() {
        return State.findAll({});
      }
    },
    state: {
      value: null,
      set: function() {
        // Remove the city when the state changes
        this.attr('city', null);
      }
    },
    cities: {
      get: function() {
        var state = this.attr('state');
        return state ? City.findAll({ state: state }) : null;
      }
    },
    city: {
      value: null
    },
    restaurants: {
      get: function(){
        var params = {},
          state = this.attr('state'),
          city = this.attr('city');

        return state && city ?
          Restaurant.findAll({
            'address.state': state,
            'address.city': city
          }) : null;
      }
    }
  }
});

export default RestaurantListViewModel;