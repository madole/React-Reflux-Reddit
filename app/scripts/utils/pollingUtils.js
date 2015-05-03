var FeedActions = require('../actions/feedActions');
var pollInterval = 1000*30; //30 seconds

var interval;

function setUpInterval() {
  interval = setInterval(function() {
    console.log('Polling for data ...');
    FeedActions.fetchList();
  }, pollInterval);
}

function clearPollingInterval() {
  clearInterval(interval);
}

module.exports = {
  setUpInterval: setUpInterval,
  clearInterval: clearPollingInterval
};
