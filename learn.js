// BMI = kg/m2

weight = 100
height = 1.8

bmi = weight / (height * height)

if (bmi > 35) {
    console.log("extremly obese")
} else if (bmi > 30) {
    console.log("obese")
} else if (bmi > 25) {
    console.log("overweight")
} else if (bmi > 18.5) {
    console.log("normal")
} else {
    console.log("underweight")
}

dan = 9;
index = 2;
while (index <= 9) {
    console.log(dan + "x" + index + "=" + multiplyBy9(index));
    index++
}

for (i = 2; i <= 9; i++) {
    console.log(dan + "x" + i + "=" + multiplyBy9(i));
}

function 안녕(매개변수1, 매개변수2) {
    console.log("만나서 반가워!")
    console.log("내 이름은 " + 매개변수1 + ", " + 매개변수2 + "이지.")
    console.log("잘 지내보지")
}

function multiplyBy9(num) {
    return num * 9;
}

console.log(multiplyBy9(10));

function pi() {
    return 3.1415
}

console.log(pi());

function sayHello() {
    안녕("코난", "탐정");
    안녕("ㄹㅇ", "탐ㅇㅎㅇㅎ정");
}

sayHello();