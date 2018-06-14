// let promise1 = new Promise((resolve, reject) => {
//     // resolve('Request was successful');
//     reject('Unable to complete request');
// });

// promise1.then((result) => {
//     console.log(result);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });

let asyncSum = (a, b) => {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           if (typeof a === 'number' && typeof b === 'number') {
               resolve(a + b);
           } else {
               reject('Both parameters must be numbers');
           }
       }, 1500); 
    });        
}

asyncSum(18, 5).then((answer) => {
    console.log(answer);
    return asyncSum(answer, '10');
}).then((secondAnswer) => {
    console.log(secondAnswer);
}).catch((errorMessage) => {
    console.log(errorMessage);
});