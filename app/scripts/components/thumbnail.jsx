var React = require('react');

var Thumbnail = React.createClass({
  render: function() {
    if(!this.props.src || this.props.src === 'default') return ( <span />);

    return (
      <a href={this.props.link} className="thumbnail">
        <img src={this.props.src} alt="..." />
      </a>
    );
  }
});

module.exports = Thumbnail;
