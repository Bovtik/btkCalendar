var AppDispatcher = require('./appDispatcher'),
		AppConstants = require('./appConstants');

var AppActions = {
	addCEvent: function (data) {
		AppDispatcher.handleViewAction ({
			actionType: AppConstants.ADD_C_EVENT,
			data: data
		});
	}
};

module.exports = AppActions;