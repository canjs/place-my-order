$(function () {
  var AppState = can.Map.extend({});

  var appState = new AppState();

  // Bind the application state to the root of the application
  $('#can-app').html(can.view('layout.stache', appState));

  // Bind the application state to the can.route
  can.route.map(appState);

  can.route.ready();
});
