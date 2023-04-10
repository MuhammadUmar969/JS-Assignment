//  1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// let firstNum = function(num1){
//   return function (num2){
//     return num1 + num2;
//   }
// }

// const add = firstNum(40);
// console.log(add(10)); 

////////////////////////////////////////////////


// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

//  function search(array,value){
//     if(array.length === 0){
//         return false;
//     }
//     else if(array[0] === value){
//         return true;
//     }
//     else {
//         return search(array.slice(1), value); 
//       }
//  }

//  const array = [0,2,5,7,9,4];
//  const value1 = +prompt("Enter first value");
//  const value2 = +prompt("Enter second value");

//  console.log(search(array,value1));
//  console.log(search(array,value2));

////////////////////////////////////////////////


// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


//   function paraELem (text){
//     let addPara = document.getElementById("para");
//     addPara.innerText = text;
// }
//   paraELem("Hello World");

////////////////////////////////////////////////


// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

// function newListItem (content){
//     let listItem = document.querySelector("ul");
//     let li = document.createElement("li");
//     li.textContent = content;
//     listItem.appendChild(li);
//     }
//       newListItem("Apple");
//       newListItem("Orange");
//       newListItem("Banana");
//       newListItem("Mango");
    
////////////////////////////////////////////////


// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

//  function changeColor(reference,bgColor){
//     let elementId = document.getElementById(reference);
//     elementId.style.backgroundColor = bgColor;
//  }
 
//  changeColor("color", "orange");

////////////////////////////////////////////////


// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

// let objData = {
//     name : "Umar",
//     age : 19,
//     Language : "JavaScript"
// }
 
// function storage (key, object){
//     localStorage.setItem(key, JSON.stringify(object));
// }
//  storage("JavaScript",objData);

////////////////////////////////////////////////


// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

//  function storage (key){
//     return localStorage.getItem(key);
//     }
//    let data = storage("JavaScript");
//     console.log(data);

////////////////////////////////////////////////

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

// function saveObjData(obj) {

//     let keys = Object.keys(obj)

//     keys.forEach(function (key, index) {
//         localStorage.setItem(key, obj[key])
//     })

//     let newObj = {}
//     keys.forEach(function (key, index) {
//         let value = localStorage.getItem(key)
//         newObj[key] = obj[key]
//     })

//     return newObj
// }

// let obj = {
//     name: "Umar",
//     age: 19
// }

// let retrieve = saveObjData(obj)
// console.log(retrieve);
