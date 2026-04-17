// const arr = [10, 20, 30, 40];

// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log(arr[i]); // undefined, undefined, undefined, undefined
//     }, 1000);
// }


const arr = [10, 20, 30, 40];

arr.forEach(function (value, index) { //fix the closure handling with foreach function
    setTimeout(function () {
        console.log(value); 
    }, 1000);
});