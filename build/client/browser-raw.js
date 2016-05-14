var React = require('react'),
    ReactDOM = require('react-dom');

var reactMountPoint = document.getElementById("appContainer");

reactMountPoint.style.height = window.innerHeight - 70 + 'px'; //	Kostyli #2

var App = require('../components/btkCalendar');

var AppInstance = React.createFactory(App)();

var AppElement = ReactDOM.render(AppInstance, reactMountPoint);