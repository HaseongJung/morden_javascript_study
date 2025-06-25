/// 숫자를 입력하는 다양한 방법
let billion = 1e9
// alert( 1e9 );


/// 16진수, 2진수, 8진수
// alert( 0xff ); // 16진수
let a = 0b11111111; // 255의 2진수
let b = 0o377;  // 255의 8진수
// alert( a === b );


/// toString(base)
// let num = 255;
// alert(`255 -> 2진수: ${num.toString(2)}`);
// alert(`255 -> 16진수: ${num.toString(16)}`);


/// 어림수 구하기
let num = 1.23456;
// alert( Math.floor(num * 100) / 100 );


/// 부정확한 계산
// alert( 1e500 );
// alert( 0.1 + 0.2 == 0.3 );
// alert( 0.1 + 0.2 );


/// isNaN과 isFinite
// alert( isNaN(NaN) );
// alert( isNaN("str") );

// alert( isFinite("15") );
// alert( isFinite("str") );

// let num2 = +prompt("숫자를 입력하세요.", '');
// if (!isFinite(num2)) {
//     alert("숫자 제대로 입력해라");
// }


/// parseInt와 parseFloat
// alert( +"100px" );


/// ex1) 수를 입력받아 덧셈하기
function addNum() {
    num1 = +prompt("숫자 입력해라", 0);
    num2 = +prompt("숫자 입력해라", 0);

    alert(num1 + num2);
}
// addNum();s

/// ex2) 6.35.toFixed(1) == 6.3인 이유는 무엇일까요?

/// ex3) 숫자를 입력할 때까지 반복하기
// function readNumber() {
//     while (true) {
//         const num = prompt("숫자 입력해라", 0);

//         if (+prompt === parseInt)
//         if (isNaN(num)) {
//             return NaN;
//         } else {
//             return num
//         }
//     }
// }
function readNumber() {
    let num;

    do {
        num = prompt("Enter a number", 0);
    } while (!isFinite(num) );

    if (num === null || num === '') return null
    
    return +num;
}
// alert(`Read: ${readNumber()}`);


/// ex3) min과 max 사이에 있는 임의의 숫자 생성하기
