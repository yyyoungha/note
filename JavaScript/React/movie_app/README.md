# Movie App 2019

<a href="https://academy.nomadcoders.co/p/reactjs-fundamentals">React JS Fundamentals course 2019</a>

## JSX

> JSX : JavaScript inside of HTML. React에서만 사용하는 문법이다.

### Component 기본

- React는 Component와 함께 동작한다.
- Component는 기본적으로 HTML을 반환하는 함수이다.
- Component 이름은 대문자로 시작한다.
- Component를 작성할 때마다 `import React from 'react'` 구문을 써줘야 한다.
- React application은 하나의 component만을 rendering한다.

### Component 사이 데이터 전달하기

- props는 component 사이 데이터 전달에 사용된다.
- Food component에 "kimchi"라는 value로 fav라는 props 전달하기
- props 값 참조하는 방법

1. function 에서 props 로 받아온 다음 `props.fav` 로 참조
2. function 에서 {fav} 로 받아온 다음 `{fav}` 로 참조

```javascript
function Food({ fav }) {
  return <h3>I like {fav}</h3>;
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
      {foodILike.map(dish => (
        <Food name={dish.name} />
      ))}
    </div>
  );
}
```

여기서 dish는 <a href="https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics">`JavaScript Object`</a>이므로 다양한 속성을 가진다.

### React element의 유일성

각각의 React element는 유일한 key prop 값으로 식별되어야 한다.

```javascript
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "http://blah-blah/images/pic.jpg",
    rating: 5
  },
  ...
]
```

### prop-types

`npm i prop-types` 명령어로 설치할 수 있다.
<a href="https://ko.reactjs.org/docs/typechecking-with-proptypes.html">`prop-types`</a>는 내가 전달받은 props가 내가 원하는 props 인지 확인해 준다. (타입 확인 기능)

```javascript
import PropTypes from "prop-types";

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
```

- 이름은 반드시 .propTypes 로 설정해야 한다.
- isRequired는 해당 props가 반드시 이 타입으로 되어있어야 함을 말하며, 아니면 콘솔에서 에러를 발생시킨다.

### React Class Component와 State

일반적으로 Class component는 다음과 같이 작성한다.

```javascript
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>The number is {this.state.count} </h1>
      </div>
    );
  }
}
```

- Function component는 HTML 코드를 return 하고 그 결과가 화면에 표시된다.
- Class component는 React.Component로부터 상속받은 `render()` 함수를 가진다. React는 자동으로 모든 Class component들의 `render()` 함수를 실행시킨다.
- Class component를 사용하는 이유는 state라는 Object 때문이다. 바뀌는 데이터를 담을 수 있다.

## Reference

- <a href="https://ko.reactjs.org/docs/getting-started.html">React Official Website</a>
- <a href="https://velopert.com/3236">[번역] 리액트에 대해서 그 누구도 제대로 설명하기 어려운 것 – 왜 Virtual DOM 인가?</a>