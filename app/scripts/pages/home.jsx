var React     = require('react');
var Link      = require('react-router').Link;
var $         = require('jquery');
var Button    = require('react-bootstrap').Button;
var Input     = require('react-bootstrap').Input;
var Jumbotron = require('react-bootstrap').Jumbotron;
var RouteHandler  = require('react-router').RouteHandler;
var Alien         = require('../components/redditAlien');
var PollingUtils  = require('../utils/pollingUtils');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  onSubmit: function() {
    var subReddit = $('.subreddit-input').val();
    this.context.router.transitionTo('custom', {subreddit: subReddit} );
  },

  render: function() {
    PollingUtils.clearInterval();
    return (
      <div className='container'>
        <h1 className='header'><Alien />Reddit automator<Alien /></h1>
        <Jumbotron>
          <Link to="custom" params={{subreddit: 'javascript'}}><Button bsSize='large'>/r/JavaScript</Button></Link>
          <Link to="reddit-homepage"><Button bsSize='large'>Hot on Reddit</Button></Link>
        </Jumbotron>

        <Input type='text' label='/r/' placeholder='Enter Sub Reddit' className="subreddit-input"/>
        <Button bsSize='large' onClick={this.onSubmit}>Submit</Button>

        <RouteHandler />
      </div>
    );
  }
});

module.exports = Home;
