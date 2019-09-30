var events = require('events');

var emitter = new events.EventEmitter();

emitter.setMaxListeners(11) //首先必须先设置监听最大数量，否则监听器超过10个或者超过最大指定数，将会产生警告！！！！

emitter.on('someEvent', (arg1, arg2) => {
    console.log('xiaoming', arg1, arg2)
});
emitter.on('someEvent', (arg1, arg2) => {
    console.log('wanggang', arg1, arg2)
});
emitter.on('someEvent', (arg1, arg2) => {
    console.log('wanggang', arg1, arg2)
});
emitter.on('someEvent', (arg1, arg2) => {
    console.log('wanggang', arg1, arg2)
});
emitter.on('someEvent', (arg1, arg2) => {
    console.log('wanggang', arg1, arg2)
});
emitter.on('someEvent', (arg1, arg2) => {
    console.log('wanggang', arg1, arg2)
});
emitter.on('someEvent', (arg1, arg2) => {
    console.log('wanggang', arg1, arg2)
});
emitter.on('someEvent', (arg1, arg2) => {
    console.log('wanggang', arg1, arg2)
});
emitter.on('someEvent', (arg1, arg2) => {
    console.log('wanggang', arg1, arg2)
});
emitter.on('someEvent', (arg1, arg2) => {
    console.log('wanggang', arg1, arg2)
});
emitter.on('someEvent', (arg1, arg2) => {
    console.log('wanggang', arg1, arg2)
});

console.log(emitter.listeners('someEvent'))