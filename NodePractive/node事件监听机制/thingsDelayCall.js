var events = require('events');

var eventEmitter = events.EventEmitter;

var event = new eventEmitter();

event.on('some_event', function () {
    console.log('some_event 事件触发');
})

setInterval(function () {
    event.emit('some_event');
}, 1000)