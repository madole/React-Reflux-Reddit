var React = require('react');
var Link = require('react-router').Link;
var Jumbotron = require('react-bootstrap').Jumbotron;
var Button = require('react-bootstrap').Button;

var Favorites = React.createClass({
  render: function() {
    return (
      <Jumbotron>
      <h2>Favorites</h2>
      <Link to="reddit-homepage"><Button bsSize='large' title='Hot on Reddit'>Hot on Reddit</Button></Link>
      <Link to="custom" params={{subreddit: 'javascript'}}><Button bsSize='large' title='All things Javascript'>/r/JavaScript</Button></Link>
      <Link to="custom" params={{subreddit: 'node'}}><Button bsSize='large' title='All things NodeJS'>/r/Node</Button></Link>
      <Link to="custom" params={{subreddit: 'webdev'}}><Button bsSize='large' title='All things WebDev'>/r/WebDev</Button></Link>
      <Link to="custom" params={{subreddit: 'css'}}><Button bsSize='large' title='All things CSS'>/r/CSS</Button></Link>
    </Jumbotron>
    );
  }
});

module.exports = Favorites;
