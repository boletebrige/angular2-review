/*
const message = 'hello';

// type safety is aquired by setting message: string
// deafult message is: whats up
function saySomething(message: string = 'whats up'){
    console.log(message);
}

saySomething();
*/

class Greater {
    saySomething(message: string = 'whats up') {
        return message + ' something';
    }
}
var greeter = new Greater();