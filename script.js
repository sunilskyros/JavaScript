// const greet = (name) => {
//     console.log(`Hello, ${name}!`);
// }
// greet("Sunil Kumar");

// const good=function(name) {
//     console.log(`Good day, ${name}!`);
// }
// good("Sunil Kumar");


// const add = (a, b) => {
//     return a + b;
// }
// console.log(add(5, 3));

// const multiply=function(a, b) {
//     return a * b;
// }
// console.log(multiply(5, 3));

// const divide = (a, b) => {
//     if (b === 0) {
//         return "Cannot divide by zero!";
//     }
//     return a / b;
// }
// console.log(divide(10, 2));
// console.log(divide(10, 0));

// function subtract(a, b) {
//     return a - b;
// }
// console.log(subtract(10, 5));



// const details = {
//     name: "Sunil Kumar" ,
//     age: 25
// };

// console.log(details.name); 
// console.log(details["name"]);
// console.log(details.age);  
// console.log(details.city);
// console.log(details.city = "Vellore");
// console.log(details["city"] = "Chittor");
// console.log(details.city);
// console.log("name" in details);
// console.log("age" in details);
// console.log("city" in details);
// console.log(details);
// console.log(typeof details.city);
// console.log(Object.keys(details));
// console.log(Object.values(details));
// console.log(Object.entries(details));


// const pers = {
//                 name: "Sunil Kumar",
//                 greet: function () {
//                     console.log("Hello Boy");
//                 }
//             };
// pers.greet();
// const person = {
//             name: "Sunil Kumar",
            
//             greet() {
//                 console.log("Hello " + this.city);
//             }
//         };
//         person.greet();



// let age = 25;

// if (age >= 18) {
//     console.log("You can vote.");
// } else {
//     console.log("You are not old enough to vote.");
// }

// let num = 5;

// for(let i = 0; i < num; i++) {
//     console.log(i);
// }

// let count = 0;

// while(count < 5) {
//     console.log(count);
//     count++;
// }


// let num1 = document.getElementById("num1");
// let num2 = document.getElementById("num2");
// let result = document.getElementById("result");

// function performOperation() {
//     let a = parseFloat(num1.value);
//     let b = parseFloat(num2.value);
//     let sum = add(a, b);
//     let product = multiply(a, b);
//     let quotient = divide(a, b);
//     let difference = subtract(a, b);
    
//     result.innerHTML = `
//         <p><strong>Sum</strong>: ${sum}</p>
//         <p><strong>Product</strong>: ${product}</p>
//         <p><strong>Quotient</strong>: ${quotient}</p>
//         <p><strong>Difference</strong>: ${difference}</p>
//     `;
// }
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => b === 0 ? "Cannot divide by zero!" : a / b;
// const subtract = (a, b) => a - b;

// let a = ' Hello     gh';
// console.log(a.charAt(11));
// let b = 65454;
// console.log(a.length);
// console.log(b.length);
// console.log(a.toUpperCase());
// console.log(a + " " + b);
// console.log(`${a} ${b}`);



// let n = "Sunil Kumar";
// for(let i =-1; i > -n.length - 1; i--) {
//     console.log(n[i]);
// }
// console.log(n[-5]);




// 1. Simple Array
//         let numbers = [1, 2, 3];
//         console.log("Simple:", numbers);
//         console.log("Type of numbers:", typeof numbers)
// // 2. Mixed Array
//         let mixed = [10, "Hello", true];
//         console.log("Mixed:", mixed);
//         console.log("Type of mixed:", typeof mixed)
// // 3. Multi-Dimensional Array
//         let matrix = [
//             [1, 2],
//             [3, 4]
//         ];
// console.log("2D:", matrix[0][1]); // 2
// // 4. Array of Objects
//         let users = [
//             { name: "Anu", age: 22 },
//             { name: "John", age: 25 }
//         ];
//         console.log("User Name:", users[0].name);   
//         console.log("Type of users:", typeof users);
// // 5. Empty Array + Dynamic
//         let arr = [];
//         arr.push(100);
//         arr.push(200);
// console.log("Dynamic:", arr);
        
let get = document.getElementById("get");
        
// let object = {
//     name: "Sunil Kumar",
//     age: 25,
//     city: "Vellore"
// };
// let object2 = {
//     obj1: object,
//     obj2: {
//         name: "Anu",
//         age: 22,
//         city: "Chittor"
//     }
// };
// console.log(object2.obj1);
// console.log(object2.obj2);
function change() {
    let idx = 0;
    while (idx<100) {
        get.innerHTML += "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed, voluptatibus repellat minima voluptas ut laboriosam numquam culpa tempore exercitationem enim hic fugit tempora recusandae suscipit, doloremque officiis aspernatur! Sit quisquam aspernatur expedita doloribus deserunt assumenda nulla? Dolores et asperiores error voluptates cum, ipsam quae veritatis deleniti eum molestiae debitis.";
        idx++;
    }
}