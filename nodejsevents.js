const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
  console.log('Please turn of the motor'); 
  setTimeout(() => {
    console.log("Please turn of the motor ! Its a gentle remainder")
    
  }, 3000);
});
console.log("The script is running")

myEmitter.emit('Waterfull'); 
console.log("The script is still running 1")