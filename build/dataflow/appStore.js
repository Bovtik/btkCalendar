var AppDispatcher = require('./appDispatcher'),
		AppConstants = require('./appConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign');

var CHANGE_EVENT = 'change';

var mainStorage = {
	CEvents: [],
	viewDate: new Date(),
	formIsVisible: true
};



var AppStore = assign({}, EventEmitter.prototype, {
	getAll: function () {
   	return mainStorage.CEvents;
  },

  addCEvent: function (data) {
  	var id = mainStorage.CEvents.length;
  	mainStorage.CEvents[id] = {
  		id: id,
  		title: data.title,
  		start: data.start,
  		duration: data.duration
  	};
  },
  deleteCEvent: function (id) { 
  	delete mainStorage.CEvents[id];
  },

  getViewDate: function () {
  	return mainStorage.viewDate;
  },
  setViewDate: function (newdate) {
  	mainStorage.viewDate.setTime(newdate);
  },

  formIsVisible: function () {
  	return mainStorage.formIsVisible;
  },
  viewForm: function () {
  	mainStorage.formIsVisible = true;
  },
  hideForm: function () {
  	mainStorage.formIsVisible = false;
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
			console.log(AppStore.getAll());
			AppStore.addCEvent(payload.action.data);
			// console.log(payload.action.data);
			AppStore.emitChange();
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
			AppStore.viewForm();
			AppStore.emitChange();
			break;
		case AppConstants.HIDE_FORM:
			AppStore.hideForm();
			AppStore.emitChange();
			break;
		default:
			break;
	}
	return true;
});

module.exports = AppStore;