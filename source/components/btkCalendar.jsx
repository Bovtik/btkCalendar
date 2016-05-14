var React = require('react'),
		ReactDOM = require('react-dom');

var MenuButtonAdd = React.createClass ({
	getInitialState: function () {
		return {
			style: {
				backgroundColor: '#99e',
				borderRadius: '50%',
				width: '50px',
				height: '50px'
			}
		}
	},

	render: function () {
		return <div style={this.state.style} />
	}
})

var Menu = React.createClass({
	getInitialState: function () {
		return {
			style: {
				backgroundColor: '#66d',
				padding: '15px 30px 15px 30px'
			}
		}
	},

	render: function () {
		return	<div style={this.state.style}>
					 		<MenuButtonAdd/>
						</div>
	}
});

var AddEventPopup = React.createClass ({
	getInitialState: function () {
		return {
			style: {
				position: 'absolute',
				width: '600px',
				height: '480px'
			}
		}
	},
	render: function () {
		return
	}
});

var TimelineBlockHeight = 40;

var Timeline = React.createClass({
	getInitialState: function () {
    return {
    	style: {
    		position: 'absolute',
    		left: '0px',
    		top: '0px',
    		width: '60px',
    		overflow: 'hidden',
    		backgroundColor: '#ddd'

    	},
    	hourStyle: {
    		height: TimelineBlockHeight + 'px',
    		textAlign: 'center',
    		lineHeight: '60px',	// Kostyli
    		borderBottom: 'solid 2px #ccc'
    	}
    }
	},

	render: function () {
		return <div style={this.state.style}>
						<div style={this.state.hourStyle}>00:00</div>
					 	<div style={this.state.hourStyle}>01:00</div>
					 	<div style={this.state.hourStyle}>02:00</div>
					 	<div style={this.state.hourStyle}>03:00</div>
					 	<div style={this.state.hourStyle}>04:00</div>
					 	<div style={this.state.hourStyle}>05:00</div>
					 	<div style={this.state.hourStyle}>06:00</div>
					 	<div style={this.state.hourStyle}>07:00</div>
					 	<div style={this.state.hourStyle}>08:00</div>
					 	<div style={this.state.hourStyle}>09:00</div>
					 	<div style={this.state.hourStyle}>10:00</div>
					 	<div style={this.state.hourStyle}>11:00</div>
					 	<div style={this.state.hourStyle}>12:00</div>
					 	<div style={this.state.hourStyle}>13:00</div>
					 	<div style={this.state.hourStyle}>14:00</div>
					 	<div style={this.state.hourStyle}>15:00</div>
					 	<div style={this.state.hourStyle}>16:00</div>
					 	<div style={this.state.hourStyle}>17:00</div>
					 	<div style={this.state.hourStyle}>18:00</div>
					 	<div style={this.state.hourStyle}>19:00</div>
					 	<div style={this.state.hourStyle}>20:00</div>
					 	<div style={this.state.hourStyle}>21:00</div>
					 	<div style={this.state.hourStyle}>22:00</div>
					 	<div style={this.state.hourStyle}>23:00</div>
					 	<div style={this.state.hourStyle}>00:00</div>
					 </div>
	}
});

var DayBlock = React.createClass({
	getInitialState: function () {
		return {
			wrapperStyle: {
				float: 'left',
				width: '600px',
				margin: '0 1px 0 1px',
				borderRadius: '5px',
				overflow: 'hidden'
			},
			style: {
				height: 24 * TimelineBlockHeight + 'px',
				backgroundColor: '#fff',
				backgroundImage: 'url(components/dayBlockText.png)'
			},
			titleStyle: {
				height: TimelineBlockHeight + 2 + 'px',
				backgroundColor: '#68e',
				fontSize: '1.6em',
				lineHeight: TimelineBlockHeight + 2 + 'px',
				padding: '0 15px 0 15px',
				textAlign: 'right',
				color: '#fff'
			}
		}
	},

	render: function () {
		return	<div style={this.state.wrapperStyle}>
							<div style={this.state.titleStyle}>May, 15</div>
							<div style={this.state.style} />
						</div>
	}
});

var Workspace = React.createClass({
	getInitialState: function () {
		return {
			style: {
				position: 'relative',
				height: '100%',
				paddingLeft: '60px',
				backgroundColor: '#34a',
				overflowY: 'scroll'
			}
		}
	},

	render: function () {
		return	<div style={this.state.style}>
							<Timeline/>
							<DayBlock/>
							<DayBlock/>
							<DayBlock/>
						</div>
	}
});



var BtkCalendar = React.createClass({
	getInitialState: function () {
		return {
			style: {
				height: '100%'
			}
		}
	},


  render: function() {
    return	<div style={this.state.style}>
    					<Menu/>
    					<Workspace/>
    				</div>


  }
});

module.exports = BtkCalendar;

