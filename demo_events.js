var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create event handler
var myEventHandler = () => {
    console.log('I hear a scream');
}

// Assign the event handler to an event
eventEmitter.on('scream', myEventHandler);

// Fire scream event
eventEmitter.emit('scream');