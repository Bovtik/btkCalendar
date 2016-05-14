var React = require('react'),
    ReactDOM = require('react-dom');

var MenuButtonAdd = React.createClass({
	getInitialState: function () {
		return {
			style: {
				backgroundColor: '#99e',
				borderRadius: '50%',
				width: '50px',
				height: '50px'
			}
		};
	},

	render: function () {
		return React.createElement('div', { style: this.state.style });
	}
});

var Menu = React.createClass({
	getInitialState: function () {
		return {
			style: {
				backgroundColor: '#66d',
				padding: '10px'
			}
		};
	},

	render: function () {
		return React.createElement(
			'div',
			{ style: this.state.style },
			React.createElement(MenuButtonAdd, null)
		);
	}
});

var BtkCalendar = React.createClass({
	getInitialState: function () {
		return {};
	},

	render: function () {
		return React.createElement(Menu, null);
	}
});

module.exports = BtkCalendar;