var React = require('react');
var Button = require('react-bootstrap').Button;
var Link = require('react-router').Link;
var Jumbotron = require('react-bootstrap').Jumbotron;
var RouteHandler = require('react-router').RouteHandler;
var Alien = require('../components/redditAlien');
var PollingUtils = require('../utils/pollingUtils');

var Home = React.createClass({

  render: function() {
    PollingUtils.clearRhInterval();
    PollingUtils.clearJsInterval();
    return (
      <div className='container'>
        <h1 className='header'><Alien />Reddit automator<Alien /></h1>
        <Jumbotron>
          <Link to="javascript"><Button bsSize='large'>/r/JavaScript</Button></Link>
          <Link to="reddit-homepage"><Button bsSize='large'>Hot on Reddit</Button></Link>
        </Jumbotron>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Home;
