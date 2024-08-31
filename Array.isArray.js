/**Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not. */

const number = 13;
const emotions = ['sad', 'angry', 'happy'];
const users = [];

console.log(Array.isArray(number));
console.log(Array.isArray(emotions));
console.log(Array.isArray(users));