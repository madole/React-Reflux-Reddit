var React = require('react');
var Button = require('react-bootstrap').Button;

var Vote = React.createClass({

	render: function() {
    var isUp = this.props.ups >= 0;
    var style = isUp ? 'success' : 'danger';
    var val = isUp ? this.props.ups : this.props.downs;
    var thumbs = isUp ? 'fa fa-thumbs-o-up' : 'fa fa-thumbs-o-down';

		return (
				<Button bsStyle={style}><i className={thumbs}></i> {val} </Button>
			)
	}
});

module.exports = Vote;
