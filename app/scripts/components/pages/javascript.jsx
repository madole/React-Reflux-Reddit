var React = require('react');
var Feed = require('./../feedTemplate');

var rJavascript = React.createClass({
  render: function() {
    return <Feed subreddit='javascript' />
  }
});

module.exports = rJavascript;
