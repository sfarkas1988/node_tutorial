var events = require('events');
var eventEmitter = new events.EventEmitter();


var screamEventHandler = function () {
    console.log('I hear a scream!');
}

//assign handler to an event
eventEmitter.on('scream', screamEventHandler);


//fire event
eventEmitter.emit('scream');

