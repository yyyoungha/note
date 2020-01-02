# Movie App 2019

<a href="https://academy.nomadcoders.co/p/reactjs-fundamentals">React JS Fundamentals course 2019</a>

## JSX
 >JSX : JavaScript inside of HTML. React에서만 사용하는 문법이다.

### Component 기본
- React는 Component와 함께 동작한다. 
- Component는 기본적으로 HTML을 반환하는 함수이다. 
- Component 이름은 대문자로 시작한다.
- Component를 작성할 때마다 ```import React from 'react'``` 구문을 써줘야 한다.
- React application은 하나의 component만을 rendering한다.

### Component 사이 데이터 전달하기
- props는 component 사이 데이터 전달에 사용된다.
- Food component에 "kimchi"라는 value로 fav라는 props 전달하기
- props 값 참조하는 방법
1) function 에서 props 로 받아온 다음 `props.fav` 로 참조
2) function 에서 {fav} 로 받아온 다음 `{fav}` 로 참조

```javascript
function Food({fav}) {
  return (
    <h3>I like {fav}</h3>
  );
}

function App() {
  return (
  <div>
    <h1>Hello</h1>
    <Food fav="kimchi" />
    <Food fav="ramen" />
  </div>
  );
}
```

### Component에서 동적으로 데이터 불러오기
> <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map">`JavaScript map()`</a> 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
```javascript
function App() {
  return (
  <div>
    {foodILike.map(dish => <Food name={dish.name} />)}
  </div>
  );
}
```
여기서 dish는 <a href="https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics">`JavaScript Object`</a>이므로 다양한 속성을 가진다.

### React element의 유일성
각각의 React element는 유일한 key prop 값으로 식별되어야 한다.

## Reference
- <a href="https://ko.reactjs.org/docs/getting-started.html">React Official Website</a>
- <a href="https://velopert.com/3236">[번역] 리액트에 대해서 그 누구도 제대로 설명하기 어려운 것 – 왜 Virtual DOM 인가?</a>