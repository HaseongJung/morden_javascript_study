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
// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // per1, per2의 프로퍼티를 user로 복사
// Object.assign(user, permissions1, permissions2);

// // check
// for (key in user) {
//     alert(`key: ${key}, value: ${user[key]}`);
// }

// let user = {
//     name: "John",
//     age: 30,
// };

// let clone = Object.assign({}, user);
// for (key in user) {
//     alert(`key: ${key}, value: ${user[key]}`);
// }

// 중첩 객체 복사
// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50,
//     }
// };

// let clone = Object.assign({}, user);
// alert( user.sizes === clone.sizes); // true

// user.sizes.width++;
// alert(clone.sizes.width);

/// 메서드와 this
// let user = {a


//메서드 단축 구문
// user = {
//     sayHi() {
//         alert("Hi");
//     }
// };
// user.sayHi();

// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         alert(this.name);
//     }

// };
// user.sayHi();

// function sayHi() {
//   alert( this.name );  
// };

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//     alert( this.name );
// }

// //별개의 객체에서 동일한 함수 사용
// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// admin['f']();

// let user = {
//     firstName: "보라",
//     sayHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     }
// };

// user.sayHi();

// ex.1)객체 리터럴에서 'this' 사용하기
// function makerUser() {
//     return {
//         name: "John",
//         ref: this,
//     }
// }
// let user = makerUser();
// alert( user.ref.name );
// -> error 빌셍 ('this'는 호출 시점에 결정되기 때문)

// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this;
//         }
//     };
// };

// let user = makeUser();
// alert( user.ref().name );


// // ex2) 계산기 만들기
// let calculator = {
//     num1: 0,
//     num2: 0,

//     read() {
//         this.num1 = Number(prompt("Input num1", 0));
//         this.num2 = Number(prompt("Input num2", 0));
//     },
//     sum() {
//         return this.num1 + this.num2;
//     },
//     mul() {
//         return this.num1 * this.num2;
//     }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// ex3) 체이닝
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         alert(this.step);
//         return this;
//     }
// };


// ladder.up().up().down().showStep();

// // 4.5 new 연산자와 생성자함수
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }
// let user = new User("보라");

// alert(user.name);


// 생성자 내 메서드
// function User(name) {
//     this.name = name;

//     this.sayHi = function() {
//         alert(`제 이름은 ${this.name} 입니다.`);
//     };
// }

// let bora = new User("이보라");
// bora.sayHi();


// // ex1) 함수 두 개로 동일한 객체 만들기
// let  obj = {};

// function A() {
//     return obj;
// }
// function B() {
//     return obj;
// }

// let a = new A;
// let b = new B;

// alert( a == b );

// ex2) 계산기 만들기
// function Calculator() {
//     this.num1 = 0;
//     this.num2 = 0;

//     this.read  = () => {
//         this.num1 = +prompt("Enter num1", 0);
//         this.num2 = +prompt("Enter num2", 0);
//     }
//     this.sum = () => {
//         return this.num1 + this.num2;
//     }
//     this.mul = () => {
//         return this.num1 * this.num2;
//     }
// }
// let calculator = new Calculator();
// calculator.read();

// alert( `Sum = ${calculator.sum() }`);
// alert( `Mul = ${calculator.mul() }`);


// ex) 누산기 만들기
// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = () => {
//         this.value += +prompt("Enter the number", 0);
//     };
// }
// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

// 옵셔널 체이닝 '?'
// let user = {};
// alert( user?.addredss?.street );

// let user = null;
// alert( user?.address );
// alert( user?.address.street);

// let user = null;
// let x = 0;

// user?.sayHi(x++);
// alert(x);

// let user1 = {
//     admin() {
//         alert("관리자 계정입니다.");
//     }
// }

// let user2 = {};

// user1.admin?.();
// user2.admin?.();

// let user1 = {
//     firstName: "Violet"
// };

// let user2 = null;

// let key = "firstName";

// alert( user1?.[key] );
// alert( user2?.[key] );

// alert( user1?.[key]?.somthing?.not?.existing)

// delete user?.name;


// 자료구조와 자료형
// let id = Symbol(); // id는 새로운 심볼이 됨

// let id = Symbol("id);")

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// alert(id1 === id2);

// let user = {
//     name: "John"
// };

// let id = Symbol("id");

// user[id] = 1;
// alert( user[id] );

// let id = Symbol("id");
// let user = {
//     name: "John",
//     [id]: 123
// };

// for (key in user) {
//     alert(user.key);
// }

// // 전역 레지스트리에서 심볼을 읽음
// let id = Symbol.for("id");
// // 동일한 이름을 이용해 심볼을 다시 읽음 (더 멀리 떨어진 코드에서도 가능)
// let idAgain = Symbol.for("id");

// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");

// // alert( Symbol.keyFor(sym) );
// // alert( Symbol.keyfor(sym2) );

// let globalSymbol = Symbol.for("name");
// let localSymbol = Symbol("name");

// alert( Symbol.keyFor(globalSymbo) );
// alert( Symbol.keyFor(localSymbol));

// alert( localSymbol.description );

// 4.8 객체를 원시형으로 변환하기
// let user = {
//     name: "John",
//     money: 1000,

//     [Symbol.toPrimitive](hint) {
//         alert(`hint: ${hint}`);
//         return hint == "string" ? `{name: ${this.name}}` : this.money;
//     }
// };


// alert(user);
// alert(+user);
// alert(user + 500);


// let user = {name: "John"};

// alert(user);
// alert(user.valueOf() === user);


// let user = {
//     name: "John",
//     money: 1000,

//     // hint가 "string"인 경우
//     toString() {
//         return `{name: "${this.name}"}`;
//     },

//     // hint가 "number"나 "default인 경우
//     valueOf() {
//         return this.money;
//     }
// };

// alert(user);
// alert(+user);
// alert(user + 500);


let obj = {
    toString() {
        return "2";
    }
};

alert(obj + 2);