can.fixture('GET /api/cities', function(request, response) {
  can.ajax({
    url: 'models/fixtures/cities/' + request.data.state + '.json',
    success: function(data) {
      response(data);
    }
  });
});

can.fixture('GET /api/restaurants', 'models/fixtures/restaurants.json');
can.fixture('GET /api/restaurants/{_id}', 'models/fixtures/spago.json');

can.fixture('GET /api/states', 'models/fixtures/states.json');