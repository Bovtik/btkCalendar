var React = require('react');

module.exports = React.createClass({
	render: function () {
		var bodyStyle = {
			width: '100%',
			margin: '0',
			overflow: 'hidden',
			backgroundColor: '#fff'
		}
		return (
			<html lang="en">
			  <head>
			    <meta charSet="UTF-8"></meta>
			    <title>btkCalendar</title>
			  </head>
			  <body style={bodyStyle}>
			    <div id="appContainer" style={{height: '100%'}} dangerouslySetInnerHTML={{__html: this.props.content}} />
			    <script src="client/browser.js"></script>
			  </body>
			</html>
		)
	}
});