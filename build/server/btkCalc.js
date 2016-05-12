var React = require('react'),
    ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function () {
    var divStyle = {
      backgroundColor: '#22b',
      borderRadius: '10px',
      padding: '20px',
      color: '#fff',
      display: 'inline-block'
    };
    var text = this.props.text || 'Hello world!';
    return React.createElement(
      'div',
      { style: divStyle },
      text
    );
  }
});