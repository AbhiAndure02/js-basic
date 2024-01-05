// const mynum = [2,3,4,5]

// const total = mynum.reduce(function (acc, curVal){
//     console.log(`acc ${acc} curval is ${curVal}`)
//     return acc+curVal

// },0)
// console.log(total)

// //…in the array starting at index 0 [1, 100].reduce(getMax, 50); // 100 [50].reduce(getMax, 10); // 50 // callback is invoked…
// …(async (acc, fn) => fn(await acc), initialValue); reduce() skips missing elements in sparse arrays, but it does not skip…
// …Note that reduce() is always equivalent to a for...of loop, except that instead of mutating a variable in the upper scope…
const mynum = [2,3,4,5]
const mytotal = mynum.reduce((acc, currVal)=>  acc+currVal, 0
)

console.log(mytotal)