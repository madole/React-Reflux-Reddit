var React = require('react');
var FeedGrid = require('./feedGrid');
var Button = require('react-bootstrap').Button;
var Link = require('react-router').Link;
var Alien = require('./redditAlien');

var RouteHandler = require('react-router').RouteHandler;

var Feed = React.createClass({

  render: function() {
    var header = this.props.subreddit;
    return (
      <div className='container'>
        <h1 className='header'><Alien /><div className='header-text'>{header}</div><Alien /></h1>
        <Link to='/'><Button className='back-button'><i className='fa fa-hand-o-left'></i> Back</Button></Link>

        <FeedGrid subreddit={this.props.subreddit} />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Feed;
