var React = require('react');
var Button = require('react-bootstrap').Button;

var Score = React.createClass({
  render: function() {
    var style = this.props.score > 0 ? 'success' : 'danger';
    var thumbs = this.props.score > 0 ? 'fa fa-thumbs-o-up' : 'fa fa-thumbs-o-down';

    return (<td><Button bsStyle={style}><i className={thumbs}></i> {this.props.score}</Button></td>);
  }
});

module.exports = Score;
