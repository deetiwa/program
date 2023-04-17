// program to stop the setTimeout() method
// setTimeout() method from executing the function by using the clearTimeout() method.

const timeoutId = setTimeout(function()
{
    console.log("Hello World");
}, 2000);

clearTimeout(timeoutId);
console.log(`Timeout ID ${timeoutId} has been cleared`);


const User = 'John';
function greet(userName) {
  alert('Welcome ' + userName + '!');
}
setTimeout(greet, 2000, User);
clearTimeout(User);

