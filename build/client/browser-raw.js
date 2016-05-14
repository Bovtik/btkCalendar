var React = require('react'),
    ReactDOM = require('react-dom');

var App = require('../components/btkCalendar');

var AppInstance = React.createFactory(App)();

var AppElement = ReactDOM.render(AppInstance, document.getElementById("appContainer"));