/*
const message = 'hello';

// type safety is aquired by setting message: string
// deafult message is: whats up
function saySomething(message: string = 'whats up'){
    console.log(message);
}

saySomething();
*/
var Greater = (function () {
    function Greater() {
    }
    Greater.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'whats up'; }
        return message + ' something';
    };
    return Greater;
}());
var greeter = new Greater();
//# sourceMappingURL=magic.js.map