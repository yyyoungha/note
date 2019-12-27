# Vanilla JS
 본 문서는 <a href="https://www.youtube.com/watch?v=wUHncG3VwPw&list=PL7jH19IHhOLM8YwJMTa3UkXZN-LldYnyK&index=1">노마드 코더의 바닐라 자바스크립트 강의</a>를 간단하게 정리한 글입니다.

## Variables
 const, let, var 세종류가 있다. 웬만하면 const를 쓰자. 

## How to organize data in JavaScript?

### 1. Array
```JSX
const daysOfWeek = ["MON", "TUE", "WED"]
```

### 2. Object
```JSX
const info = { 
    name:"John Doe",
    age:27,
    gender="Male",
    favColors=["Blue", "Green"]
}

info.gender = "Female";
```

## Functions
```JSX
function sayHello(name, age) {
    console.log('Hello!', name, " you are ", age, "years old.");
}

sayHello("John", 27);
```

### Improve functions
```JSX
function sayHello(name, age) {
    console.log(`Hello ${name}, you are ${age} years old.`);
}
```

## DOM (Document Object Model)
JavaScript 코드로 HTML DOM을 조작할 수 있다.
```JSX
const title = document.getElementById("title");
title.innerHTML = "Hi! From JS"; 
title.style.color = "red";
console.dir(title);
```

## Flow Control
`if-else`, `for`, `while` 등 제어문과 반복문은 C나 Java와 비슷하다.


## 실습 예제

### 1. clock.js
- 현재 시간을 Date 객체로 불러온 뒤 표현
- `setInterval(function, delay)` 함수로 특정 함수를 주기적으로 호출

### 2. greetings.js
- `querySelector()` 함수로 element 가져오기
- CSS 파일과 연계하여 특정 상황에서 element 숨기기/보이기
- button 기본동작 막고 이벤트 리스너 추가
- element의 classList에 클래스 추가/제거
- Local Storage에 데이터 저장 및 불러오기

### 3. todo.js
- Local Storage에 객체 Array 저장 및 불러오기
- `JSON.stringify()`, `JSON.parse()` 함수로 Object <-> String 간 변환
- button click 이벤트 발생 시 해당 위치를 찾아서 부모 element 삭제하기

### 4. bg.js
- `Math.floor()`와 `Math.random()` 함수를 이용하여 일정 범위의 무작위 정수 생성하기
- 배경 이미지 추가
- CSS 파일로 Fade-In 효과

### 5. weather.js
- navigator를 활용하여 사용자의 위치 정보 불러오기
- 외부 API 사용해서 날씨 정보 불러오기
