console.log('Starting app');

// callback + time
setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('--Second callback--')
}, 0);

console.log('Finishing up');

// Pretty print JSON 
// console.log(JSON.stringify(, undefined, 2));