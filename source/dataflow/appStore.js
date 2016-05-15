var AppDispatcher = require('./appDispatcher'),
		AppConstants = require('./appConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var CHANGE_EVENT = 'change';

var mainStorage = {
	CEvents: [],
	viewDate: new Date()
};

function create (data) {
	var id = Date.now();
	mainStorage.CEvents[id] = {
		id: id,
		start: data.start,
		duration: data.duration
	};
}

function destroy (id) { 
	delete mainStorage.CEvents[id];
}

var AppStore = assign({}, EventEmitter.prototype, {
	getAll: function () {
   	return mainStorage.CEvents;
  },
  getViewDate: function () {
  	return mainStorage.viewDate;
  },
  setViewDate: function (newdate) {
  	mainStorage.viewDate.setTime(newdate);
  },

  addChangeListener: function (callback) {
  	this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
  	this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function () {
  	this.emit(CHANGE_EVENT);
  }
});

AppDispatcher.register( function (payload) {
	switch (payload.action.actionType) {
		case AppConstants.ADD_C_EVENT:

			break;
		case AppConstants.REMOVE_C_EVENT:

			break;
		case AppConstants.DAYS_SCROLL_NEXT:
			AppStore.setViewDate(
				AppStore.getViewDate().getTime() + 1 * 24 * 60 * 60 * 1000
			);
			console.log(AppStore.getViewDate());
			AppStore.emitChange();
			break;
		case AppConstants.DAYS_SCROLL_PREV:
			AppStore.setViewDate(
				AppStore.getViewDate().getTime() - 1 * 24 * 60 * 60 * 1000
			);
			console.log(AppStore.getViewDate());
			AppStore.emitChange();
			break;
		case AppConstants.CALL_FORM:

			break;
		default:
			break;
	}
	return true;
});

module.exports = AppStore;