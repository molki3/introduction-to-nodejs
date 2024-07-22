/*
EVENTS
They are created and emitted, first step in the declaration and then the call.
*/

const EventEmitter = require('events');


const customEmitter = new EventEmitter()

customEmitter.on('response', (data, text) => {
    console.log(data);
    console.log(text);
})

customEmitter.emit('response', [1,2,3,4], 'Array');