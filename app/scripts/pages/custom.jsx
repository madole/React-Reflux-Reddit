var React = require('react');
var Feed = require('../components/feedTemplate');
var FeedActions = require('../actions/feedActions');
var PollingUtils = require('../utils/pollingUtils');
var FeedStore = require('../stores/feedStore');

var baseUrl = 'http://www.reddit.com';

var custom = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  componentWillMount: function() {
    var router = this.context.router;
    var subreddit = router.getCurrentParams().subreddit;
    this.setState({subreddit, subreddit})
  },

  render: function () {
    var url = this.state.subreddit ? baseUrl + '/r/' + this.state.subreddit + '/.json' : baseUrl + '/.json';
    FeedStore.updateSourceUrl(url);
    FeedActions.fetchList();
    PollingUtils.setUpInterval();

    return <Feed subreddit={this.state.subreddit} />
  }
});

module.exports = custom;
