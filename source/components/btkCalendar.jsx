var React = require('react'),
		ReactDOM = require('react-dom'),
		update = require('react-addons-update');

var AppActions = require('../dataflow/appActions'),
		AppStore = require('../dataflow/appStore');

Date.prototype.getMonthShortName = function () {
	switch (this.getMonth() + 1) {
		case 1:
			return 'Jan';
		case 2:
			return 'Feb';
		case 3:
			return 'Mar';
		case 4:
			return 'Apr';
		case 5:
			return 'May';
		case 6:
			return 'Jun';
		case 7:
			return 'Jul';
		case 8:
			return 'Aug';
		case 9:
			return 'Sep';
		case 10:
			return 'Oct';
		case 11:
			return 'Nov';
		case 12:
			return 'Dec';
		default:
			break;
	}
}

var constants = {
	msInHour: 3600000
}

var TimelineBlockHeight = 40;

var MenuButton = React.createClass({
	getInitialState: function () {
		return {
			style: {
				display: 'inline-block',
				backgroundColor: '#99e',
				borderRadius: '50%',
				width: '50px',
				height: '50px',
				margin: '15px',
				lineHeight: '50px',
				textAlign: 'center',
				fontSize: '2em',
				color: '#fff',
				cursor: 'pointer'
			}
		}
	},
	handleClick: function(e) {
	  if (this.props.onClick) {            
	  	this.props.onClick.call(this, e);
	  }
	},
	render: function () {
		return	<div onClick={this.handleClick} style={this.state.style}>{this.props.caption}</div>
	}
});

var MenuButtonAdd = React.createClass ({
	getInitialState: function () {
		return {}
	},
	handleClick: function (e) {
		AppActions.viewForm();
	},
	render: function () {
		return	<MenuButton onClick={this.handleClick} caption={'+'} />
	}
});

var MenuButtonDaysPrev = React.createClass ({
	getInitialState: function () {
		return {}
	},
	handleClick: function (e) {
		AppActions.scrollDaysPrev();
	},
	render: function () {
		return	<MenuButton onClick={this.handleClick} caption={'<'} />
	}
});

var MenuButtonDaysNext = React.createClass ({
	getInitialState: function () {
		return {}
	},
	handleClick: function (e) {
		AppActions.scrollDaysNext();
	},
	render: function () {
		return	<MenuButton onClick={this.handleClick} caption={'>'} />
	}
});

var Menu = React.createClass({
	getInitialState: function () {
		return {
			style: {
				backgroundColor: '#66d',
				padding: '0 15px 0 15px'
			}
		}
	},

	render: function () {
		return	<div style={this.state.style}>
					 		<MenuButtonAdd/>

					 		<MenuButtonDaysPrev/>
					 		<MenuButtonDaysNext/>
						</div>
	}
});

var Timeline = React.createClass({
	getInitialState: function () {
    return {
    	style: {
    		position: 'relative',
    		float: 'left',
    		left: '0px',
    		top: '0px',
    		width: '60px',
    		overflow: 'hidden',
    		backgroundColor: '#ddd',
    		zIndex: '2'
    	},
    	hourStyle: {
    		height: TimelineBlockHeight + 'px',
    		textAlign: 'center',
    		lineHeight: '60px',	// Kostyli
    		borderBottom: 'solid ' + TimelineBlockHeight / 20 + 'px #ccc'
    	}
    }
	},

	render: function () {
		return	<div style={this.state.style}>
							<div style={this.state.hourStyle}></div>
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

var RemoveEventButton = React.createClass({
	getInitialState: function () {
		return {

		}
	},

	render: function () {
		return	<div></div>
	}
});

var CEventRemoveButton = React.createClass({
	getInitialState: function () {
		return {
			style: {
				position: 'absolute',
				top: '10px',
				right: '10px',
				width: '20px',
				height: '20px',
				lineHeight: '10px',
				padding: '0px',
				borderRadius: '50%',
				border: 'solid 1px #335',
				color: '#335',
				backgroundColor: '#eef',
				cursor: 'pointer'
			}
		}
	},

	handleClick: function (e) {
		AppActions.removeCEvent(this.props.evId);
	},

	render: function () {
		return	<button type="button" onClick={this.handleClick} style={this.state.style}>{'x'}</button>
	}
});

var CEventBlock = React.createClass({
	getInitialState: function () {
		return {
			data: this.props.data,
			style: {
				width: '98%',
				margin: '0 1% 0 1%',
				position: 'absolute',
				top:	(2 + TimelineBlockHeight) * 
							(this.props.data.start.getHours() +
					 		this.props.data.start.getMinutes() / 60) - 1 + 'px',
				height: (2 + TimelineBlockHeight) *
								(this.props.data.duration / constants.msInHour) + 'px',	// 36*10^5ms = 1h
				backgroundColor: '#88e',
				borderRadius: '5px',
				boxShadow: '1px 1px 2px #aaa',
				overflow: 'hidden'
			},
			titleStyle: {
				margin: this.props.data.duration >= constants.msInHour ? '10px' : '3px',
				fontSize: this.props.data.duration >= constants.msInHour ? '1.2em' : '.75em',
				color: '#fff'
			}
		}
	},

	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		AppStore.removeChangeListener(this._onChange);
	},

	render: function () {
		return	<div style={this.state.style}>
							<div style={this.state.titleStyle}>{this.state.data.title}</div>
							<CEventRemoveButton evId={this.state.data.id} />
						</div>
	},

	_onChange: function () {
		this.setState({
			viewDate: AppStore.getViewDate()
		});
	}
});

var DayBlock = React.createClass({
	getInitialState: function () {
		return {
			wrapperStyle: {
				display: 'inline-block',
				position: 'relative',
				width: '33%',
				minWidth: '350px',
				margin: '0 .1515% 0 .1515%',
				borderRadius: '5px',
				overflow: 'hidden'
			},
			style: {
				height: 24 * (TimelineBlockHeight + 2) + 'px',
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

	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		AppStore.removeChangeListener(this._onChange);
	},

	render: function () {
		var dayTitle =	this.props.date.getMonthShortName() +
										', ' + this.props.date.getDate();

		var curCEvents = AppStore.getCEventsByDate(this.props.date);

		return	<div style={this.state.wrapperStyle}>
							<div style={this.state.titleStyle}>{dayTitle}</div>
							<div style={this.state.style} />
							{curCEvents.map (function (item, i) {
									return <CEventBlock data={item} key={item.id} />
								})
							}
						</div>
	},

	_onChange: function () {
		this.setState({
			CEvents: AppStore.getCEventsByDate(this.props.date)
		});
	}
});

var Workspace = React.createClass({
	getInitialState: function () {
		return {
			style: {
				position: 'relative',
				float: 'left',
				height: '100%',
				width: 'calc(100% - 60px)'
			},
			viewDate: AppStore.getViewDate()
		}
	},

	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		AppStore.removeChangeListener(this._onChange);
	},

	render: function () {
		var DayBlockDate = [];
		for (var i = 0; i < 3; i++) {
			DayBlockDate[i] = new Date();
			DayBlockDate[i].setTime(
				this.state.viewDate.getTime() + 
					i * 24 * 60 * 60 * 1000);
		}
		return	<div style={this.state.style}>
							<DayBlock date={DayBlockDate[0]}/>
							<DayBlock date={DayBlockDate[1]}/>
							<DayBlock date={DayBlockDate[2]}/>
						</div>
	},

	_onChange: function () {
		this.setState({
			viewDate: AppStore.getViewDate()
		});
	}
});

var FormCloseButton = React.createClass({
	getInitialState: function () {
		return {
			style: {
				position: 'absolute',
				top: '20px',
				right: '20px',
				width: '20px',
				height: '20px',
				lineHeight: '10px',
				padding: '0px',
				borderRadius: '50%',
				border: 'solid 1px #777',
				color: '#777',
				backgroundColor: '#fff',
				cursor: 'pointer'
			}
		}
	},

	handleClick: function () {
		AppActions.hideForm();
	},

	render: function () {
		return	<button type="button" onClick={this.handleClick} style={this.state.style}>{'x'}</button>
	}
});

var FormSubmitButton = React.createClass({
	getInitialState: function () {
		return {
			style: {
				position: 'absolute',
				bottom: '20px',
				right: '20px',
				height: '35px',
				padding: '0 20px 0 20px',
				lineHeight: '30px',
				fontSize: '.85em',
				color: '#fff',
				backgroundColor: '#68e',
				border: 'none',
				boxShadow: '0px 0px 1px #aaa',
				borderRadius: '3px',
				cursor: 'pointer'
			}
		}
	},

	handleClick: function (e) {
		if (this.props.onClick) {            
			this.props.onClick.call(this, e);
		}
	},

	render: function () {
		return	<button onClick={this.handleClick} type="button" style={this.state.style}>{'Create'}</button>
	}
});

var PopupForm = React.createClass({
	getInitialState: function () {
		return {
			style: {
				display: 'none',
				position: 'absolute',
				top: '160px',
				left: '0px',
				right: '0px',
				margin: '0 auto',
				width: '480px',
				height: '320px',
				padding: '20px',
				backgroundColor: '#fff',
				boxShadow: '0px 0px 5px #999',
				zIndex: '10'
			},
			titleStyle: {
				fontSize: '2.25em',
				marginLeft: '10px'
			},
			textInputStyle: {
				display: 'block',
				float: 'left',
				width: '200px',
				margin: '10px',
				padding: '5px',
				lineHeight: '2em',
				color: '#555',
				backgroundColor: '#fefefe',
				border: 'solid 1px #999'
			},
			tipStyle: {
				position: 'absolute',
				left: '20px',
				bottom: '80px',
				color: '#aaa'
			}
		}
	},

	handleSubmit: function () {
		var title = this.refs.inpTitle,
				date = this.refs.inpDate,
				time = this.refs.inpTime,
				dur = this.refs.inpDur;

		title.style.borderColor 
		= date.style.borderColor 
		= time.style.borderColor
		= dur.style.borderColor 
		= '#999';

	if (!title.value.match(/^.{1,45}$/)) {
		title.style.borderColor = 'red';
	} else if (!date.value.match(/^\d{2}[.]\d{2}[.]\d{4}$/)) {
		date.style.borderColor = 'red';
	} else if (!time.value.match(/^\d{1,2}[:]\d{1,2}$/)) {
		time.style.borderColor = 'red';
	} else if (!dur.value.match(/^\d{1,2}[:|.]\d{1,2}$/)) {
		dur.style.borderColor = 'red';
	} else {
			var dateArr = date.value.split('.'),
					timeArr = time.value.split(':');

			var start = new Date (dateArr[2], dateArr[1] - 1, dateArr[0],
														timeArr[0], timeArr[1], 0, 0);

			var durArr =	dur.value.replace(/:/g, '.')
																					.split('.');

			var cEvData = {
				title: title.value,
				start: start,
				duration: (+durArr[0] * 60 + +durArr[1]) * 60 * 1000
			};
			AppActions.addCEvent(cEvData);
			setTimeout( function () {		// UX - not an instant, sudden form vanishing
				AppActions.hideForm();
			}, 100);
		}
	},

	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		AppStore.removeChangeListener(this._onChange);
	},

	render: function () {
		return	<form style={this.state.style}>
							<FormCloseButton/>
							<div style={this.state.titleStyle}>{'New event'}</div>
							<input ref="inpTitle" placeholder="Event Title (max: 40 chars)" type="text" style={this.state.textInputStyle}/>
							<input ref="inpDate" placeholder="Date (dd.mm.yyyy)" type="text" style={this.state.textInputStyle}/>
							<input ref="inpTime" placeholder="Time (hh:mm)" type="text" style={this.state.textInputStyle}/>
							<input ref="inpDur" placeholder="Duration (hh.mm / hh:mm)" type="text" style={this.state.textInputStyle}/>
							<div style={this.state.tipStyle}>{'Check the input boxes placeholders for rules of input'}</div>
							<FormSubmitButton onClick={this.handleSubmit}/>
						</form>
	},

	_onChange: function () {
		var newState = update (this.state, {
		  style: {
		    display: { $set: AppStore.formIsVisible() ? 'block' : 'none' }
		  }
		});
		this.setState(newState);
	}
});

var BtkCalendar = React.createClass({
	getInitialState: function () {
		return {
			style: {
				height: '100%'
			},
			wrapperStyle: {
				position: 'relative',
				height: '100%',
				width: '100%',
				overflowY: 'scroll',
				backgroundColor: '#34a'
			}
		}
	},


  render: function() {
    return	<div style={this.state.style}>
    					<Menu/>
    					<PopupForm/>
    					<div style={this.state.wrapperStyle}>
	    					<Timeline/>
	    					<Workspace/>
	    				</div>
    				</div>
  }
});

module.exports = BtkCalendar;

