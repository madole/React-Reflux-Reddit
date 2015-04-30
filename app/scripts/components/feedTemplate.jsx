var React = require('react');
var FeedGrid = require('./FeedGrid');
var Button = require('react-bootstrap').Button;
var Link = require('react-router').Link;
var Alien = require('./redditAlien');

var RouteHandler = require('react-router').RouteHandler;

var Feed = React.createClass({

  render: function() {
    var header = this.props.subreddit === 'javascript' ? '/r/JavaScript' : 'Reddit Homepage';
    return (
      <div className='container'>
        <h1 className='header'><Alien />{header}<Alien /></h1>
        <Link to='/'><Button className='back-button'><i className='fa fa-hand-o-left'></i> Back</Button></Link>
        <FeedGrid subreddit={this.props.subreddit} />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Feed;
