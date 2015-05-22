// mount header and footer components
m.mount(document.getElementById('header'), app.Header);
m.mount(document.getElementById('footer'), app.Footer);

// set mode for routing to 'hash'
m.route.mode = 'hash';

// start router for app
m.route(document.getElementById('body'), "/", {
  "/": app.Home,
  "/login": app.Login,
  "/dashboard": app.Dashboard,
  "/meditation/new": app.NewMeditation,
  "/meditation/log": app.LogMeditation
});
