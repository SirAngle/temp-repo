const amount = 5;

if (amount < 10)
    console.log("Number is less than 10")
else
    console.log("Number is greater than 10")

console.log("App executed")

console.log(__dirname)
console.log(__filename)

// Repeats every second.
// setInterval(() => {
//     console.log(`hello world`)
// }, 1000);

// Waits 1 second, and posts this message
setTimeout(() => {
    console.log(`hello world`)
}, 1000);