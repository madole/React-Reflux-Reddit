var React = require('react');
var Feed = require('../components/feedTemplate');
var PollingUtils = require('../utils/pollingUtils');
var FeedStore = require('../stores/feedStore');
var FeedActions = require('../actions/feedActions');

var redditHomepage = React.createClass({
  render: function() {
    FeedStore.updateSourceUrl('http://www.reddit.com/.json');
    FeedActions.fetchList();
    PollingUtils.setUpInterval();
    return <Feed subreddit='homepage' />
  }
});

module.exports = redditHomepage;
