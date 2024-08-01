"use strict";

// ==========================> 1-rasm =========================>

// ============> 1-masala <============

// let person = {
//     name: 'Abdulloh',
//     age: 19,
//     job: 'Logistik kompaiya',
//     interest: 'game',
//     hobby: 'sleep',
//     number: '+998998252326',
//     username: 'AU'
// }

// for( let key in person){
//     console.log(key + "-" + person[key]);
// }


// ============> 2-masala <============
//   const person1 = {
//     name : 'Abdulloh',
//     age: 19,

//   }
//   const person2 = {
//     hobby : 'Volleyball',
//     interest: 'sleep',

//   }

//   let res = Object.assign(person1, person2);
//   console.log(res);

// ============> 3-masala <============
//   let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//   let lastValue = numbers[numbers.length - 1];
//   let newValue = lastValue + 1;
//   numbers.push(newValue);
//   console.log(numbers);

// ============> 4-masala <============
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// // Massiv yig'indisini hisoblash
// function sum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     if (numbers[0] % 2 !== 0) {
//         numbers.push(sum);
//     } else {

//         numbers.unshift(sum);
//     }

//     console.log(numbers);
// }
// sum(numbers);

// ============> 5-masala <============
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let first = numbers[0];
// let last = numbers[numbers.length - 1];
// numbers.unshift(last);
// numbers.push(first);
// console.log(numbers);

// ============> 6-masala <============
// let words = [];

// function getWord(index) {
//     if (index >= 6) {
//         console.log(words);
//         return;
//     }
//     let word = prompt(`So'z kiriting (${index + 1}-chi so'z)`);

//     words.push(word);

//     getWord(index + 1);
// }

// getWord(0);

// ============> 7-masala <============
// tushunmadim.(







// ==========================> 2-rasm =========================>


// ============> 1-masala <============

// let enterString = prompt("Enter string");

// function string(enterString) {

//     let emptyArr = ['Sardor', 'Azim'];
//     emptyArr.push(enterString);
//     console.log(emptyArr);
// }

// string(enterString)


// ============> 2-masala <============
// function myFunc(arr1, arr2) {

//     const commonElements = arr1.filter(value => arr2.includes(value));

//     arr1 = arr1.filter(value => !commonElements.includes(value));
//     arr2 = arr2.filter(value => !commonElements.includes(value));


//     arr1.unshift(...commonElements);
//     arr2.unshift(...commonElements);

//     return [arr1, arr2];
// }

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [3, 4, 5, 6, 7];

// let [newArray1, newArray2] = myFunc(array1, array2);

// console.log(newArray1); 
// console.log(newArray2); 

// ============> 3-masala <============

// let obj = {
//     name: 'John',
//     age: 30,
//     jop: 'Mehanic',
//     study: 'none',
//     travel: 'US'
// }
// function objFunc(obj) {
//    let keys =  Object.keys(obj);
//    let keyngLength = keys.length;
//    console.log(keys);
//    console.log(`length = ${keyngLength}`);
// }
// objFunc(obj)


// ============> 4-masala <============

// function getNumbers() {
//     let numbers = [];
//     for (let i = 0; i < 4; i++) {
//         let num = +prompt(`Please enter number ${i + 1}:`);
//         numbers.push(num);
//     }
//     return numbers;
// }

// function sumArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// let numbers = getNumbers();
// let sum = sumArray(numbers);
// console.log(`Numbers: ${numbers}`);
// console.log(`Sum: ${sum}`);


// ============> 5-masala <============

// let obj = {
//     name: "Abdulloh",

// }
// let obj2 = {
//     age: 19
// }

// function object(obj, obj2) {
//     let sum = Object.assign(obj, obj2);
//     let result = Object.values(sum);
//     console.log(result);
// }

// object(obj, obj2)