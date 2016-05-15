var AppDispatcher = require('./appDispatcher'),
		AppConstants = require('./appConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var CHANGE_EVENT = 'change';

var calendarEvents = {};

function create (data) {
	var id = Date.now();
	calendarEvents[id] = {
		id: id,
		start: data.start,
		duration: data.duration
	};
}

function destroy (id) { 
	delete calendarEvents[id];
}

var AppStore = assign({}, EventEmitter.prototype, {
	getAll: function () {
   	return calendarEvents;
  },

  emitChange: function () {
  	this.emit(CHANGE_EVENT);
  }
});

AppDispatcher.register( function (payload) {
	console.log(payload);
	return true;
});

module.exports = AppStore;