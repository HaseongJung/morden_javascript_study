// let user = new Object(); // 객체 생성자
// let user = {}; // 객체 리터럴
// let user = {
//     name: "John",
//     age: 30
// }
// // alert( user.name );
// // alert( user.age );
// user.isAdmin = true;
// alert( user.isAdmin );
// delete user.age;

// let user = {
//     name: "John",
//     age : 30
// };

// let key = prompt("어떤 정보?", "name");
// alert( user[key] );
// let key = "name";
// alert( user.key );

// // 계산된 프로퍼티
// let fruit = prompt("어떤 과일 구매?", "apple");
// let bag = {
//     [fruit]: 5,
// };
// alert( bag.apple );


// function makeUser(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// let user = makeUser("John", 30);
// alert(user.name)
// alert(user["age"])

// let name = "test"; 
// let user1 = {
//     name,
//     age: 20,
// };
// alert(user1.name);

// let obj = {
//     0: "test"
// };

// alert( obj["0"] );
// alert( obj[0]) ;

// let obj = {};
// obj.__proto__ = 5;
// alert(obj.__proto__);

// let user = {};
// alert( user.noSuchProperty === undefined );
// alert( user.test === undefined );

// let user = {
//     name: "John",
//     age: 30
// };
// // alert("name" in user);
// // alert(name in user);
// // alert("test" in user);
// let key = "name"
// alert("name" in user);

// let obj = {
//     test: undefined
// };
// alert(obj.test);    
// alert(obj.test === undefined);
// alert(test in obj);

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true,
// };

// for (let key in user) {
//     alert(`key: ${key}, value: ${user[key]}`)
// }
// let codes = {
//   "49": "독일",
//   "41": "스위스",
//   "44": "영국",
//   // ..,
//   "1": "미국"
// };

// for (let key in codes) {
//     alert(key);
// }

// let codes = {
//   "+49": "독일",
//   "+41": "스위스",
//   "+44": "영국",
//   // ..,
//   "+1": "미국"
// };

// for (key in codes) {
//     alert(key);
// }

// ex.1
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// ex.2
// let scheedule = {};
// alert( isEmpty(scheedule) );

// scheedule["8:30"] = "get up";
// alert( isEmpty(scheedule) );


// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// };

// const user = {
//     name: "John"
// };
// user.name = "test";
// alert(user.name);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;
// for (key in salaries) {
//     // alert(salaries[key]);
//     sum += salaries[key];
// }
// alert(sum);

// ex3
// before calll function

// function multiplyNumeric(obj) {
//     for (key in obj) {
//         if (typeof(obj[key]) == "number") {
//             obj[key] *= 2;
//         }
//     }
// };


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// multiplyNumeric(menu);

// for (key in menu) {
//     alert(menu[key]);
// }

// let message = "Hello!";
// let phrase = message;

// let user  = {
//     name: "John",
//     age: 30,
// };

// let clone = {};

// for (key in user) {
//     clone[key] = user[key];
// }
// clone.name = "Pete";
// alert( user.name );

// assign
let user = { name: "John" };

let permissions1 = { canView: true };
