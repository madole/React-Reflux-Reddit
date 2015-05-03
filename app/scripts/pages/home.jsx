var React     = require('react');
var $         = require('jquery');
var Button    = require('react-bootstrap').Button;
var Input     = require('react-bootstrap').Input;
var RouteHandler  = require('react-router').RouteHandler;
var Alien         = require('../components/redditAlien');
var PopularSub    = require('../components/popular');
var Favorites    = require('../components/favorites');
var PollingUtils  = require('../utils/pollingUtils');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  onSubmit: function() {
    var subReddit = $('.subreddit-input').val();
    this.context.router.transitionTo('custom', {subreddit: subReddit} );
  },

  onEnter: function(e) {
    if(e.which === 13) {
      this.onSubmit();
    }
  },

  render: function() {
    return (
      <div className='container'>
        <h1 className='header'><Alien />Reddit automator<Alien /></h1>
        <div className='input-subreddit'>
          <Input type='text' label='Enter a sub-Reddit' placeholder='/r/' onBlur={this.onSubmit} onKeyPress={this.onEnter} className="subreddit-input"/>
          <Button bsSize='large' onClick={this.onSubmit}>Submit</Button>
        </div>
        <Favorites />
        <PopularSub />
        <RouteHandler />
      </div>
    );
    PollingUtils.clearInterval();
  }
});

module.exports = Home;
