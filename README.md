task 1 :  Write a function to flatten a nested array 
Explanation: I have used the stack concept to flatten the nested array
filename : **flattenArray.js** 
The following testcase will be given the expected ouput 
             Testcase 1: et nestedArray = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]]; 
             Testcase 2:  let nestedArray =[1, [2, [], 3], 4]; 


task 2 : Implement a debounce function
filename: **debounceinput.html**
        Debounce prevents multiple rapid calls .
        Implemented the debounce concept in inputbox  for better understanding

task 3: difference between == and === with examples
filename :** operators.js**
  " == " - only Compares values
              - Automatically converts types before comparison (type coercion)
              
  "==="  -  Compares value AND type
            -  No conversion happens

task 4: Fix a closure-related bug in a loop 
filename: **closurefile.js**

const arr = [10, 20, 30, 40];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log(arr[i]); // undefined, undefined, undefined, undefined
    }, 1000);
}


  
