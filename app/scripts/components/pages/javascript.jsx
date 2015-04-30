var React = require('react');
var Feed = require('../feedTemplate');
var PollingUtils = require('../../utils/pollingUtils');

var rJavascript = React.createClass({
  render: function() {
    PollingUtils.setUpJsInterval();

    return <Feed subreddit='javascript' />
  }
});

module.exports = rJavascript;
