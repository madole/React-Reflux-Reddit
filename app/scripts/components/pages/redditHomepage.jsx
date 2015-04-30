var React = require('react');
var Feed = require('./../feedTemplate');
var PollingUtils = require('../../utils/pollingUtils');

var redditHomepage = React.createClass({
  render: function() {
    PollingUtils.setUpRhInterval();
    return <Feed subreddit='homepage' />
  }
});

module.exports = redditHomepage;
