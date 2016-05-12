var MyApp = React.createClass({
  render: function () {
    var divStyle = {
      backgroundColor: '#22b',
      borderRadius: '10px',
      padding: '20px',
      color: '#fff',
      display: 'inline-block'
    };
    var text = 'Hello world!';
    return React.createElement(
      'div',
      { style: divStyle },
      text
    );
  }
});

ReactDOM.render(React.createElement(MyApp, null), document.getElementById('appContainer'));