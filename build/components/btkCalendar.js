var React = require('react'),
    ReactDOM = require('react-dom');

var AddEventPopup = React.createClass({
	getInitialState: function () {
		return {
			style: {
				position: 'absolute',
				width: '600px',
				height: '480px'
			}
		};
	},
	render: function () {
		return;
	}
});

var Timeline = React.createClass({
	getInitialState: function () {
		return {
			style: {
				position: 'absolute',
				left: '0',
				top: '0',
				width: '60px',
				overflow: 'hidden',
				backgroundColor: '#ddd'

			},
			hourStyle: {
				height: '40px',
				textAlign: 'center',
				lineHeight: '60px', // Kostyli
				borderBottom: 'solid 2px #ccc'
			}
		};
	},

	render: function () {
		return React.createElement(
			'div',
			{ style: this.state.style },
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'01:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'02:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'03:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'04:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'05:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'06:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'07:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'08:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'09:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'10:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'11:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'12:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'13:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'14:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'15:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'16:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'17:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'18:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'19:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'20:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'21:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'22:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'23:00'
			),
			React.createElement(
				'div',
				{ style: this.state.hourStyle },
				'24:00'
			)
		);
	}
});

var Workspace = React.createClass({
	getInitialState: function () {
		return {
			style: {
				position: 'relative',
				height: '100%',
				backgroundColor: '#fcfcfc',
				overflowY: 'scroll'
			}
		};
	},

	render: function () {
		return React.createElement(
			'div',
			{ style: this.state.style },
			React.createElement(Timeline, null)
		);
	}
});

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
		return {
			style: {
				height: '100%'
			}
		};
	},

	render: function () {
		return React.createElement(
			'div',
			{ style: this.state.style },
			React.createElement(Menu, null),
			React.createElement(Workspace, null)
		);
	}
});

module.exports = BtkCalendar;