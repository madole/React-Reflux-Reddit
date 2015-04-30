var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./components/layout');
var Home = require('./components/pages/home');
var JavaScript = require('./components/pages/javascript');
var RedditHomepage = require('./components/pages/redditHomepage');

var routes = (
	<Route handler={Layout} path='/'>
		<DefaultRoute handler={Home} />
		<Route name="javascript" handler={JavaScript} />
		<Route name="reddit-homepage" handler={RedditHomepage} />
	</Route>
);

exports.start = function() {

  Router.run(routes, function (Handler) {
		React.render(<Handler />, document.getElementById('content'));
	});
}
