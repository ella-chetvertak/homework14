    // First

let order = new Promise(resolve => 
    setTimeout(() => resolve('Hello!'), 3000)  
);
order.then (resolve => {
    console.log(resolve);
});

    // Second

let randomChecker = new Promise(function(resolve, reject) {
    let random = Math.floor(Math.random() * 10)
    if ((random % 2) === 0) {
        resolve('Even')
    } else {
        reject('Odd')
    }
});
randomChecker.then(function(resolve) {
    console.log(resolve)
}).catch(function(reject) {
    console.log(reject)
});

    // Third

async function delay(delay) {
    return await new Promise(resolve => setTimeout(resolve, delay));
}
console.log('first call');
delay(4000).then(() => console.log('second call'));