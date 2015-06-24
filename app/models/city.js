import can from 'can';

var City = can.Model.extend({
  findAll: 'GET /api/cities'
}, {
  // Include second, empty parameter object to set instanceProperties
});

export default City;