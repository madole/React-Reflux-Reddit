var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./components/layout');
var Home = require('./pages/home');
var JavaScript = require('./pages/custom');
var RedditHomepage = require('./pages/redditHomepage');

var routes = (
	<Route handler={Layout} path='/'>
		<DefaultRoute handler={Home} />
		<Route name="reddit-homepage" handler={RedditHomepage} />
		<Route name="custom" handler={JavaScript} path='custom/:subreddit' />
	</Route>
);

exports.start = function() {

  Router.run(routes, function (Handler) {
		React.render(<Handler />, document.getElementById('content'));
	});
};
