var React = require('react');

module.exports = React.createClass({
	render: function () {
		var bodyStyle = {
			height: '100%',
			width: '100%',
			margin: '0',
			overflow: 'hidden',
			backgroundColor: '#fff'
		};
		return React.createElement(
			'html',
			{ lang: 'en' },
			React.createElement(
				'head',
				null,
				React.createElement('meta', { charSet: 'UTF-8' }),
				React.createElement(
					'title',
					null,
					'btkCalendar'
				)
			),
			React.createElement(
				'body',
				{ style: bodyStyle },
				React.createElement('div', { id: 'appContainer', dangerouslySetInnerHTML: { __html: this.props.content } }),
				React.createElement('script', { src: 'client/browser.js' })
			)
		);
	}
});