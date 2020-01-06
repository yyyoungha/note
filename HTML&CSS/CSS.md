# CSS

CSS는 HTML 요소를 꾸며주는 역할을 하며, 꾸밀 대상이 되는 요소와 그에 대한 스타일 내용으로 이루어져 있다.

### HTML 문서와 CSS의 연결방법

1. inline
2.
3. external:
4.

### CSS 기본 구조

```css
h1 {
  color: yellow;
  font-size: 2em;
}
```

- selector(선택자) : `h1` 은 선택자로, 어떤 요소를 꾸밀 것인지 선택한다.
- property(속성) : `color:` 는 속성 이름. 어떤 속성을 변경할 지 선택한다.
- value(속성 값) : `yellow;`는 속성 값으로 속성과 함께 쓰여 값을 어떻게 바꿀지 나타낸다.
- declaration(선언) : 속성과 속성 값을 묶어 선언이라 한다.

### CSS 선택자

#### 일반적인 선택자

- 요소 선택자: 요소 선택자는 선택자 부분에 태그 이름이 들어간다. 문서 내에 선택자에 해당하는 모든 요소에 스타일 규칙이 적용됩니다.

```css
h1 {
  color: yellow;
}
h2 {
  color: yellow;
}
h3 {
  color: yellow;
}
```

> 그룹화: 선택자는 쉼표를 이용해서 그룹화를 할 수 있다.

```css
h1,
h2,
h3 {
  color: yellow;
}
```

- 전체 선택자(\*): 문서 내에 모든 요소를 선택할 수 있다. 문서 내에 모든 요소에 스타일 규칙이 적용되어 편리하지만, 성능에 좋지 않으므로 될 수 있으면 사용하지 않는게 좋다.

```css
* {
  color: yellow;
}
```

#### 요소의 종류에 구애받지 않는 선택자

- class 선택자: 요소에 구애받지 않고 스타일 규칙을 적용할 수 있는 가장 일반적인 방법.

  1. HTML에서 CSS를 적용하고 싶은 태그에 `class` 속성에 값을 지정한다. 속성 값을 공백으로 구분하여 여러 `class`를 지정할 수 있다.
  2. CSS에서 .{class 속성값}으로 class 선택자를 사용해서 해당 요소에 스타일 규칙을 적용할 수 있다.

```html
// HTML
<p class="foo bar">...</p>
```

```css
// CSS
.foo {
  font-size: 30px;
}
.bar {
  color: blue;
}
```

- id 선택자: class 선택자와 비슷한 용도. class 선택자와의 차이점은 다음과 같다.
  - HTML에서 class 대신 id를 쓴다.
  - CSS 파일에서 . 대신 #를 쓴다.
  - 문서 내의 유일한 하나의 요소에 사용한다.(id 속성값은 HTML문서 내에서 유일하며, 따라서 id 선택자로 스타일을 적용할 수 있는 요소는 단 하나 뿐이다.)

```html
// HTML
<p id="foo">...</p>
```

```css
// CSS
#foo {
  background-color: green;
}
```

> 선택자의 조합: 선택자는 쉼표를 이용해서 그룹화를 할 수 있다.

```css
/* 요소와 class의 조합 */
/* 요소가 <p>이고 class 속성에 bar가 있어야 적용 */
p.bar {
  ...;
}

/* 다중 class */
/* class 속성에 foo와 bar가 모두 있어야 적용 */
.foo.bar {
  ...;
}

/* id와 class의 조합 */
/* id가 foo이고 class가 bar인 요소에 적용 */
#foo.bar {
  ...;
}
```

#### 속성 선택자

대괄호를 이용해서 선언하며 대괄호 안에 속성 이름이 들어간다.

1. 단순 속성으로 선택: 값에 상관 없이 대괄호 안에 있는 속성을 포함하기만 하면 스타일 적용

```html
<p class="foo">Hello</p>
<p class="bar">CSS</p>
<p class="baz" id="title">HTML</p>
```

```css
p[class] {
  color: silver;
}
p[class][id] {
  text-decoration: underline;
}
```

2. 정확한 속성으로 선택: 속성을 포함하며 명시한 속성 값과 일치하는 요소에만 스타일 적용

```css
p[class="foo"] {
  color: silver;
}
p[id="title"] {
  text-decoration: underline;
}
```

3. 부분 속성값으로 선택: 속성 이름과 속성값 사이에 사용되는 기호에 따라 다르게 동작한다.


    - [class~="color"] : class 속성의 값이 공백으로 구분한 "color" 단어가 포함되는 요소 선택
    - [class^="color"] : class 속성의 값이 "color"로 시작하는 요소 선택
    - [class$="color"] : class 속성의 값이 "color"로 끝나는 요소 선택
    - [class*="color"] : class 속성의 값이 "color" 문자가 포함되는 요소 선택

```html
<p class="color hot">red</p>
<p class="cool color">blue</p>
<p class="colorful nature">rainbow</p>
```

```css
p[class~="color"] {
  font-style: italic;
}
p[class^="color"] {
  font-style: italic;
}
p[class$="color"] {
  font-style: italic;
}
p[class*="color"] {
  font-style: italic;
}
```

#### 문서 구조 관련 선택자

문서 구조를 이용한 선택자는 3가지가 있다.

1. 자손 선택자: 선택자 사이에 공백으로 구분하며 앞에 나오는 요소(`div`) 내에 포함되는 요소 중 뒤에 나오는 요소(`span`)를 선택다.

```css
/* <div>의 하위 요소 중 <span>을 모두 선택 */
div span {
  color: red;
}
```

2. 자식 선택자: 자식 선택자는 선택자 사이에 닫는 꺽쇠 기호(>)로 나타내며, 앞에 나오는 요소(`div`) 의 바로 하위 요소(`h1`)를 선택한다.

```css
/* <div>의 바로 하위 요소 중 <h1>을 모두 선택 */
div > h1 {
  color: red;
}
```

3. 인접 형제 선택자: 인접 형제 선택자는 선택자 사이에 + 기호를 넣으며, 형제 관계이면서 바로 뒤에 인접해 있는 요소를 선택한다.

```css
/* body 요소의 자식인 div 요소의 자손인 table 요소 바로 뒤에 인접한 ul 요소 선택 */

body > div table + ul {
  ...;
}
```

> 문서 구조 관련 선택자에서 유의할 점은 위 예제와 같이 요소들이 많이 나열되어 있더라도 제일 우측에 있는 요소가 실제 선택되는 요소라는 것이다.

#### 가상 클래스와 선택자

- 가상 클래스: 특정한 상황(요소에 커서를 올렸을 때 등)이 발생하면 브라우저 스스로 클래스를 적용해준다. CSS에서 아래와 같이 :뒤에 가상클래스 이름을 써서 나타낸다. (hover는 마우스 커서가 올라갔을 때 적용이 되도록 정의되어 있다.)

```css
:hover {
  color: grey;
}
```

- 문서 구조와 관련된 가상 클래스
  - first-child : 첫 번째 자식 요소(HTML) 선택
  - last-child : 마지막 자식 요소(JS) 선택

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
</ul>
```

```css
li:first-child {
  color: red;
}
li:last-child {
  color: blue;
}
```

실제 `<li>`에는 `class` 속성이 없지만 내부적으로는 가상 클래스가 적용되어 마치 다음과 같이 동작하게 된다.

```html
<ul>
  <li class="first-child">HTML</li>
  <li>CSS</li>
  <li class="last-child">JS</li>
</ul>
```

- 앵커 요소와 관련된 가상 클래스

  - link : 아직 방문하지 않은 하이퍼링크
  - visited : 이미 방문한 하이퍼링크

  ```css
  a:link {
    color: blue;
  }
  a:visited {
    color: gray;
  }
  ```

- 사용자 동작과 관련된 가상 클래스

  마찬가지로 `<a>`에 주로 많이 쓰인다.

  - focus: 현재 입력 초점을 가진 요소에 적용
  - hover: 마우스 커서 아래 요소에 적용
  - active: 사용자 입력으로 활성화된 요소에 적용 (`<a>`를 클릭할 때 또는 `<button>`를 눌렀을 때처럼 순간적으로 활성화)

  ```css
  a:focus {
    background-color: yellow;
  }
  a:hover {
    font-weight: bold;
  }
  a:active {
    color: red;
  }
  ```

#### 구체성과 Cascading

```css
h1 {
  color: red;
}
body h1 {
  color: green;
}
```

위와 같이 서로 다른 선택자를 이용해 같은 요소를 선택했을 때 무엇이 적용될까? `<h1>` 태그에는 color: green; 선언이 적용된다.

그 이유는 구체성 때문인데, 구체성은 선택자를 얼마나 명시적으로(구체적으로) 선언했느냐를 4개의 값으로 수치화한 것으로, 구체성의 값이 클수록 우선으로 적용이 된다.

1. 속성값 마지막에 !important 포함유무
2. 스타일 규칙의 출처(제작자 > 사용자 에이전트)
3. 구체성

- inline으로 선언 { 0, 1, 0, 0 }
- 선택자에 id가 많을수록 { 0, 0, 1, 0 }
- 선택자에 class, 가상 클래스, 기타 속성이 많을수록 { 0, 0, 0, 1 }
- 선택자에 요소, 가상 요소가 많을수록
  더 높은 우선순위를 갖는다.

4. CSS에서 뒤에 선언된 규칙이 우선순위가 높다.

### CSS 상속

어떤 스타일 규칙이 특정 요소뿐만 아니라 그 자손 요소까지 적용되는 것.

```html
<h1>Hello, <em>CSS</em></h1>
```

```css
h1 {
  color: gray;
}
```

위 코드에서 `<em>` 요소는 부모인 `<h1>`의 color: gray; 선언을 상속받는다. 상속은 자연스러운 현상처럼 보이지만, 모든 속성이 다 상속되는 것은 아니다.

> margin, padding, background, border 등 박스 모델 속성들은 상속되지 않는다.

> 상속되는 속성은 아무런 구체성을 가지지 않는다.

### CSS 작성시 유의사항

- 제일 마지막 선언에는 세미콜론을 안 붙여도 된다.

## Reference

- <a href="https://www.edwith.org/boostcourse-ui/joinLectures/19142">[부스트코스] 웹 UI 개발</a>
- <a href="https://www.w3schools.com/">w3schools</a>
- <a href="https://developer.mozilla.org/ko/docs/Learn/CSS">MDN - CSS를 이용한 HTML 스타일링 익히기</a>
