//alert

//result = prompt(DataTransferItemList, [default]);
// let age = prompt("나이 입력", 100);
// alert(`나이는 ${age}살 입니다.`);

//result = confirm(quenstion);
// let isBoss = confirm("당신이 주인인가요?");
// alert( isBoss ); 

// ex1
// let age = prompt("나이 입력");
// alert(`${name}`);

// 자료형
// let value = true;
// alert(typeof value);
// value = String(value);
// alert(typeof value);
// let str = "123";
// alert(typeof str);
// let num = Number(str);
// alert(typeof num);
// let age = Number("test 123");
// alert(age);

// 단항 덧셈 연산자
// let apples = '2';
// let oranges = '3';
// alert(+apples + +oranges);s

// 덧셈 고치기
// let a = prompt("첫 번째 숫자 입력", 1);
// let b = prompt("두 번째 숫자 입력", 2);
// alert(+a + +b);

// alert( null === undefined );
// let flag = '2' > '12';
// alert(`${flag}`);

// //ex: 입력받은 숫자의 부호 표시하기
// const num = prompt('날짜 입력');
// if (num > 0) {
//     alert(1)
// } else if (num == 0) {
//     alert(0)
// } else {
//     alert(-1)
// }


// alert(!!null);
// alert( null || 2 || undefined );
// alert (alert(1) || 2 || alert(3) );
// alert( alert(1) && alert(2) );

//ex: 사이 범위 확인하기
// const age = prompt("나이 입력");
// if (14<=age && age<=90) {
//     alert(true);
// } else {
//     alert(false);
// }

// let firstName = null;
// let lastName = null;
// let nickName = undefined;
// // null이나 undefined가 아닌 첫 번재 피연산자
// alert(firstName ?? lastName ?? nickName ?? "unknown");

// let sum = 0;
// while(ture) {
//     let value = +prompt("숫자 입력", '');
//     if (!value) break;
//     sum += value;
// }

// function showMessage(from, text) {
//     alert(from + ':' + text);
// }

// // ex: '?'나 '||'를 사용하여 함수 다시 작성하기
// function checkAge(age) {
//     return (age>18) ? true : confirm("보호자의 동의를 받으셨나요?"); 
// }
// function checkAge(age) {
//     return age>18 || confirm("보호자의 동의를 받으셨나요?");
// }

// function min(num1, num2) {
//     if (num1 == num2) {
//         return 1;
//     } else if (num1 > num2)
//         return num1;
//     else {
//         return num2;
//     }
// }

// function min(num1, num2) {
//     if (num1==num2) {
//         return 1;
//     }
//     else {
//         return (num1>num2) ? num2 : num1;
//     }
// }
// alert(min(1, 1))

// function pow(x, n) {
//     if (n >= 1) {
//         return x**n;
//     } else {
//         alert("자연수 입력하세요")
//     }
// }
// alert(pow(3, 0));


// let sayHi = function() {
//     alert( "Hello" );
// }
// alert(sayHi);

// callback function
// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }
// ask(
//     "동의하십니까?",
//     function() {alert("동의함");},
//     function() {alert("거부함");}
// );
// function showOk() {
//     alert("동의함");
// }

// function showCancel() {
//     alert("거부함");
// }

// ask("동의하나요?", showOk, showCancel);


// sayHi("John");
// function sayHi(name) {
//     alert( `Hello ${name}` );
// }

// let sayHi = () => alert("hi");
// sayHi();

// let age = prompt("나이 입력", 18);
// let welcome = (age < 18) ?
//     () => alert("안녕"):
//     () => alert("안녕하세요");

// welcome();

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result
}


let x  = prompt('x?', '');
let n  = prompt('n?', '');

if (n > 1) {
    alert(pow(x, n));
} else {
    alert(
        `Power ${n} is not supported,
         please enter an integer number greater than zero`
    )
}