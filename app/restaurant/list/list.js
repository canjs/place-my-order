var PMORestaurantListViewModel = can.Map.extend({
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

can.Component.extend({
  tag: 'pmo-restaurant-list',
  viewModel: PMORestaurantListViewModel,
  template: can.view('restaurant/list/list.stache')
});
