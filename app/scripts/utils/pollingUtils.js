var RedditHomeFeedActions = require('../actions/redditHomeFeedActions');
var FeedActions = require('../actions/feedActions');
var pollInterval = 1000*30; //30 seconds

var jsInterval, rhInterval;

function setUpJsInterval() {
  jsInterval = setInterval(function() {
    console.log('Polling for data ...');
    FeedActions.fetchList();
  }, pollInterval);
}

function clearJsInterval() {
  clearInterval(jsInterval);
}

function setUpRhInterval() {
  rhInterval = setInterval(function() {
    console.log('Polling for data ...');
    RedditHomeFeedActions.fetchList();
  }, pollInterval);
}

function clearRhInterval() {
  clearInterval(rhInterval);
}

module.exports = {
  setUpJsInterval: setUpJsInterval,
  clearJsInterval: clearJsInterval,
  setUpRhInterval: setUpRhInterval,
  clearRhInterval: clearRhInterval
}
