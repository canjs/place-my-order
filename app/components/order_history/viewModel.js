import can from 'can';
import 'can/map/define/';

import Order from 'models/order';

var HistoryViewModel = can.Map.extend({
  define: {
    orders: {
      get: function(){
        return Order.findAll({});
      }
    }
  }
});

export default HistoryViewModel;