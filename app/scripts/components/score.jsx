var React = require('react');
var Button = require('react-bootstrap').Button;

var Score = React.createClass({
  render: function() {
    var style = this.props.score >= 0 ? 'success' : 'danger';

    return (<td><Button bsStyle={style}>{this.props.score}</Button></td>);
  }
});

module.exports = Score;
