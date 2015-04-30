var Router = require('./router');
var FeedActions = require('./actions/FeedActions');

var pollInterval = 1000*30; //30 seconds


Router.start();

setInterval(function() {
	console.log('Polling for data ...');
	FeedActions.fetchList();
}, pollInterval);
