var result = undefined;

function add(a, b, sum){
    sum = a + b;
}

// simulate a server api call

setTimeout(() => add(2, 3, result),1000);

console.log("Synchronous result:", result);
console.log("running some codes");

function addWithCallback(a, b, callback){
    const sum = a + b;
    callback(sum);
}

function printResult(value){
    console.log("callback result", value);
} 
setTimeout(() => addWithCallback(5, 7, printResult), 0);
setTimeout(() => addWithCallback(2, 3, printResult), 0);

console.log("running some more code");

