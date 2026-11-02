let arr=[1, 2, 3,4,5];
console.log(arr);
let newArr = arr.slice(1,3);
console.log(newArr);
console.log(arr.slice(-3,-1));

//Concatination

let arr1=[1,2,3];
let arr2=[4,5,6];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr);

//Speread Operator

let arr3=[7,8,9];
let combinedArr2 = [...arr1,...arr2,...arr3];
console.log(combinedArr2);

//check an a array is an array or not
console.log(Array.isArray(arr1));
console.log(Array.isArray("Hello"));

//transformation of an array into a string
console.log(arr.join(" - "));

//map and filter
let arr4=[1,2,3,4,5];
let mapArr=arr4.map(n => n*2);
console.log(mapArr);

let filterArr=arr4.filter(n => n>3);
console.log(filterArr);

//use the every function to check if all elements in an array meet a certain condition
let resultarr=arr4.every(n=> n>0);
console.log(resultarr);

//use of some function to check if at least one element in an array meets a certain condition
let resultarr2=arr4.some(n=> n>3);
console.log(resultarr2);
//swapping of two arrays
let arr5=[1,2,3];
let arr6=[4,5,6];   
let temp=arr5;
arr5=arr6;
arr6=temp;
console.log(arr5,arr6);

// Anotherway
a=1 , b=2;
[a,b]=[b,a];
console.log(a,b);