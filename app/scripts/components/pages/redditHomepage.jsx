var React = require('react');
var Feed = require('./../feedTemplate');

var redditHomepage = React.createClass({
  render: function() {
    return <Feed subreddit='homepage' />
  }
});

module.exports = redditHomepage;
