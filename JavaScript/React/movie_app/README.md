# Movie App 2019

<a href="https://academy.nomadcoders.co/p/reactjs-fundamentals">React JS Fundamentals course 2019</a>

## React 동작 방식
- <a href="https://ko.reactjs.org/docs/rendering-elements.html">웹 브라우저의 기본 Workflow와 React Virtual DOM</a>

## JSX
 JSX : JavaScript inside of HTML

### Component 기본
- React는 Component와 함께 동작한다. 
- Component는 기본적으로 HTML을 반환하는 함수이다. 
- Component 이름은 대문자로 시작한다.
- Component를 작성할 때마다 ```import React from 'react'``` 구문을 써줘야 한다.
- React Application은 하나의 component만을 rendering 한다.

### Component 사이 데이터 전달하기
- props는 component 사이 데이터 전달에 사용된다.
- Food component에 "kimchi"라는 value로 fav라는 props 전달하기
- props 값 참조하는 방법
1) function 에서 props 로 받아온 다음 `props.fav` 로 참조
2) function 에서 {fav} 로 받아온 다음 `{fav}` 로 참조
```JSX
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
