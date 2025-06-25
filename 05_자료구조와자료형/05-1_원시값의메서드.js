let john = {
    name: "John",
    sayHi: function() {
        alert("hi");
    }
};

// john.sayHi();


/// 원시값을 객체처럼 사용하기
let str = "Hello";
// alert( str.toUpperCase() );

let n = 1.23456;
// alert( n.toFixed(2) );


/// ex1) 문자열에 프로퍼티 추가 가능?
let str2 = "Hellop";
str2.test = 5;
alert(str2.test);