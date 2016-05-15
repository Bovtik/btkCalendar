var AppDispatcher = require('./appDispatcher'),
		AppConstants = require('./appConstants');

var AppActions = {
	addCEvent: function (data) {
		AppDispatcher.handleViewAction ({
			actionType: AppConstants.ADD_C_EVENT,
			data: data
		});
	},
	removeCEvent: function (data) {
		AppDispatcher.handleViewAction ({
			actionType: AppConstants.REMOVE_C_EVENT,
			data: data
		});
	},
	scrollDaysNext: function (data) {
		AppDispatcher.handleViewAction ({
			actionType: AppConstants.DAYS_SCROLL_NEXT,
			data: data
		});
	},
	scrollDaysPrev: function (data) {
		AppDispatcher.handleViewAction ({
			actionType: AppConstants.DAYS_SCROLL_PREV,
			data: data
		});
	}
};

module.exports = AppActions;