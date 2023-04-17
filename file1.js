// Javascript setTimeout()=>It's method executes a block of code after the specified time. The method executes the code only once.


function greet() {
    console.log('Hello world');
}

setTimeout(greet, 4000);    // function name and millisecond
console.log('This message is shown first');


//The setTimeout() method returns the interval id

function apple() {
    console.log('Hello Indore');
}

let intervalId = setTimeout(apple, 3000);
console.log('Id: ' + intervalId);   

