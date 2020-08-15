/** Array Fundamental */

// How to declare an Array;
// Case - 1
// 1. Empty Array.
// 2. Size is not required.
// 3. Size is dynamic here.
let arr = [];
// keep similar datatype
let arr = [1, 2, 3];
let arr = ["a", "b", "c"];
let arr = [1.1, 1.2, 1.3];

//case-2
// 1. Homogenous, Data type must be same for all the data. In C, C++, Java
// 2. There is no Data type, Mixing the data type is possible,
let arr = [1, "a", 1.3, true];

// Case - 3
// We can also add Annonymous functino or Arrow Functions in the array.
// More Complex Mixed Data Type.
let arr = [1, true, () => { }, 2.3, function () { }];

// Case - 4
// How to access any element in Array.
// Using Index
// Index start with 0
let arr = ["darshu", "patu", "vaishu"];
let firstitem = arr[0];//darshu
let secitem = arr[1];//patu

// Case 5
// How to iterate or how to print all the value of Array.
// arr.length :: Size of the Array
// length is property of Array
let arr = ["darshu", "patu", "vaishu"];
for (let i = 0; i <= arr.length; i++) {
    const value = arr[i];
    console.log(value);
}

// Case 6
// Can we update an Array?
// -- can we new value
// -- can we remove value
// -- can we replace value
let arr = ["darshu", "patu", "vaishu"];
arr.push("ankush");//add at the end of array
arr.pop();//remove from end
// Can we update value at certain index
arr[0] = "akshay";

// Case - 7
// Can we add an element at particular index
// splice - this can be used to add an elemnt at certain index without replcing
// splice - this can also be used to remove/delete an element from certain index
// splice - it takes three parameter ()
let arr = ["darshu", "patu", "vaishu"];
arr.splice(2, 0, "divya");
arr.splice(0, 0, "kash");
arr.splice(0, 1, "kashmira");
arr.splice(3, 1, "kashmira");
arr.splice(3, 0, "shimira");

// More Demo
// lets create an integer array
let arr = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    console.log(item); // print or use it logic purpose
}