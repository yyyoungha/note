# CSS

CSS는 HTML 요소를 꾸며주는 역할을 하며, 꾸밀 대상이 되는 요소와 그에 대한 스타일 내용으로 이루어져 있다.

## HTML 문서와 CSS의 연결방법

1. inline: HTML 요소에 직접 스타일 속성을 이용해서 규칙들을 선언하는 방법

   ```html
   <!-- HTML -->
   <div style="color:red;">내용</div>
   ```

2. internal: HTML 문서에 `<style>`을 활용한 방법. `<style>`은 `<head>`내부에 들어가며 `<style>`안에 스타일 규칙이 들어간다.

   ```html
   <!-- HTML -->
   <head>
     <style>
       div {
         color: red;
       }
       p {
         color: blue;
       }
     </style>
   </head>
   ```

3. external: 외부에서 스타일 시트 파일(css)을 사용하는 방법. 스타일 규칙들을 별도의 css 파일에 만든 뒤에 HTML link 태그를 통해 연결하는 방법

   ```css
   /* style.css */
   div {
     color: red;
   }
   ```

   ```html
   <!-- HTML -->
   <head>
     <link rel="stylesheet" href="./css/style.css" />
   </head>
   ```

4. import: css 파일 내에서 다른 css 파일을 불러오는 방식. 성능이 좋지 않아서 잘 쓰지 않는다.

   ```css
   @import url("css/style.css");
   ```

## CSS 기본 구조

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
  > 가장 마지막 선언에는 ;를 붙이지 않아도 된다.

## CSS 선택자

### 일반적인 선택자

- 요소 선택자(element selector): 요소 선택자는 선택자 부분에 태그 이름이 들어간다. 문서 내에 선택자에 해당하는 모든 요소에 스타일 규칙이 적용됩니다.

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

> 그룹 선택자(grouping selector): 선택자는 쉼표를 이용해서 그룹화를 할 수 있다.

```css
h1 {
  color: red;
}
h2 {
  color: red;
}
p {
  color: red;
}

/* 위 코드와 정확히 같은 동작을 한다. */
h1,
h2,
p {
  color: red;
}
```

- 전체 선택자(universal selector, \*): 문서 내에 모든 요소를 선택할 수 있다. 문서 내에 모든 요소에 스타일 규칙이 적용되어 편리하지만, 성능에 좋지 않으므로 될 수 있으면 사용하지 않는게 좋다.

```css
* {
  color: yellow;
}
```

### 요소의 종류에 구애받지 않는 선택자

- class 선택자(class selector): 요소에 구애받지 않고 스타일 규칙을 적용할 수 있는 가장 일반적인 방법.

  1. HTML에서 CSS를 적용하고 싶은 태그에 `class` 속성에 값을 지정한다. 속성 값을 공백으로 구분하여 여러 `class`를 지정할 수 있다.
  2. CSS에서 .{class 속성값}으로 class 선택자를 사용해서 해당 요소에 스타일 규칙을 적용할 수 있다.

  ```html
  <!-- HTML -->
  <p class="foo bar">...</p>
  ```

  ```css
  /* CSS */
  .foo {
    font-size: 30px;
  }
  .bar {
    color: blue;
  }
  ```

- id 선택자(id selector): class 선택자와 비슷한 용도. class 선택자와의 차이점은 다음과 같다.

  - HTML에서 class 대신 id를 쓴다.
  - CSS 파일에서 . 대신 #를 쓴다.
  - 문서 내의 유일한 하나의 요소에 사용한다.(id 속성값은 HTML문서 내에서 유일하며, 따라서 id 선택자로 스타일을 적용할 수 있는 요소는 단 하나 뿐이다.)

  ```html
  <!-- HTML -->
  <p id="foo">...</p>
  ```

  ```css
  /* CSS */
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

### 속성 선택자

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

### 문서 구조 관련 선택자

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

### 가상 클래스와 선택자

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

### 구체성과 Cascading

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

## CSS 상속

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

## CSS 속성

- color : 폰트의 색상 값을 적용할 때 사용한다. <a href="https://www.w3schools.com/colors/colors_names.asp">키워드</a>로 지정할 수도 있고, 16진수, RGB 등 다양한 방식으로 값을 지정할 수 있다.

  ```css
  h1 {
    color: red;
  }
  ```

- background: 요소의 배경에 관련된 속성을 지정

  - `background-color`: 배경의 색상 지정
  - `background-image`: 배경 이미지 경로를 지정한다. 상대 및 절대경로 모두 사용 가능
  - `background-repeat`: 이미지의 반복 여부를 지정한다.
  - `background-position`: 요소에서 배경 이미지의 위치를 지정한다.
  - `background-attachment`: 스크롤에 따른 배경 이미지 움직임 여부를 결정한다.

  ```css
   {
    background: [-color] [-image] [-repeat] [-attachment] [-position];
  }
  ```

- boxmodel: HTML의 모든 요소는 사각형의 박스 형태로 만들어진다. 박스는 총 4가지의 세분된 영역으로 나뉘며, 이 네가지를 통틀어 박스 모델이라 부른다.

  - Content 영역

  요소의 실제 내용을 포함하는 영역. 따라서 크기는 내용의 너비 및 높이를 나타낸다.

  - Border 영역

  content 영역을 감싸는 테두리 선을 border라고 한다.

  - Padding 영역

  content 영역과 테두리 사이의 여백을 padding이라고 한다. content 영역이 배경, 색 또는 이미지가 있을 때 패딩 영역까지 영향을 끼친다. 따라서 padding을 content의 연장으로 볼 수 있다.

  - Margin 영역

  border 바깥쪽의 영역을 margin이라고 한다. border 영역을 다른 요소와 구별하기 위해 쓰이는 빈 영역으로, 주변 요소와의 여백을 margin을 이용해 지정할 수 있다.

> Margin Collapse: 서로 인접한 요소의 margin이 수직 방향으로 겹칠 때, 하나로 중첩되는 것을 말한다. 좌우로는 합쳐지지 않으며 상하 방향으로만 적용된다.

- width: 요소의 가로 크기를 정의하는 데 사용하며, 정확히는 content 영역의 너비를 지정하는 것을 의미한다.

- font-family:

  ```css
   {
    font-family: family-name | generic-family (| initial | inherit);
  }
  ```

- web-font: 서버에 저장해 제공하거나, 웹 경로를 통해 사용하는 폰트

  - `@font-face`: 웹에 있는 글꼴을 사용자의 로컬 환경(컴퓨터)으로 다운로드하여 적용하는 css 속성

  ```css
  @font-face {
    /* 사용자 지정 웹 폰트명 */
    font-family: webNanumGothic;
    /* 적용 될 웹 폰트의 경로 */
    src: url(NanumGothic.eot);
    /* 필요에 따라 지정 */
    font-weight: bold;
    font-style: italic;
  }

  body {
    font-family: webNanumGothic;
  }
  ```

> - 시스템 폰트는 font-family로 선언한 글꼴이 사용자 시스템에 기본으로 설치가 되어 있어 사용할 수 있는 경우.
> - 이미지 폰트는 특정 글꼴을 사용하는 것이 아니고, 글자를 표현함에 있어 시각적인 요소를 많이 넣고 싶을 때 글꼴 대신 이미지를 이용해서 표현하는 경우. 정확히 얘기하면 이미지 폰트는 폰트가 아니고 이미지.
> - 웹 폰트의 경우는 서버에 저장해 제공하거나, 웹 경로를 통해 사용하는 폰트를 말합니다.

## 미디어 쿼리

반응형 웹 사이트 제작에 반드시 필요한 기술. 각 미디어 매체(모니터와 같은 스크린 매체, 프린트, 스크린 리더기 등)에 따라 다른 스타일(css style)을 적용할 수 있게 만드는 것

## Reference

- <a href="https://www.edwith.org/boostcourse-ui/joinLectures/19142">[부스트코스] 웹 UI 개발</a>
- <a href="https://www.w3schools.com/">w3schools</a>
- <a href="https://developer.mozilla.org/ko/docs/Learn/CSS">MDN - CSS를 이용한 HTML 스타일링 익히기</a>
