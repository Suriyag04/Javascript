//difference between == and === with examples

// == is for 
// only Compares values
// Automatically converts types before comparison (type coercion)
//  === is for 
// Compares value AND type 
//  No conversion happens

//example for "==" and "==="

console.log(10 == "10");   // true
console.log(10 === "10");  // false

console.log(true == 1);    // true
console.log(true === 1);   // false

console.log(null == undefined);   // true
console.log(null === undefined);  // false

console.log("" == 0);      // true
console.log("" === 0);     // false
