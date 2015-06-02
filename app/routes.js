can.route(':page', { page: 'home' });
can.route(':page/:slug', { slug: null });
can.route(':page/:slug/:action', { slug: null, action: null });

$('body').on('click', 'a[href="javascript://"]', function(ev) {
  ev.preventDefault();
});