// Write a function to flatten a nested array 
// using stack

function flattenArray(arr) {
    let stack = [... arr]; //copy the input array into stack
    let result = []; //flatten array will be stored
    while (stack.length > 0){
        let current = stack.pop(); //pop out the last element from the stack
        if(Array.isArray(current)){ //check the current value is array or not
            stack.push(...current) // if value is array, push into the stack  
                                   //using spread merge the elements individually
        } else {
            result.push(current) // if value is non-array, push to the final result
        }

    }
    return result.reverse() //due to LIFO, the result need to be reverse
    
}

// let nestedArray = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]]; //testcase 1
// let nestedArray =[1, [2, [], 3], 4]; //testcase 2
let nestedArray=[1, [2, 3], [4, [5, 6]], 7]; //testcase 3
console.log(flattenArray(nestedArray))