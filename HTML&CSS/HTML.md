# HTML & CSS

실무에 많이 사용되는 HTML 태그 및 CSS 속성의 문법과 주요 특징을 정리한 글입니다.

#### 몇 가지 용어들

- Tag: < > 기호 안에 태그 이름을 넣어 태그를 시작한다. 그 다음 내용이 오고, 마지막으로 종료 태그 </ > 를 붙인다.

  ```html
  <h1>Hello!</h1>
  ```

  ```html
  <!-- 태그는 아래와 같이 중첩해서 사용할 수 있다. -->
  <div>
    <h1>Hello!</h1>
  </div>
  ```

  ```html
  <!-- img, input과 같이 내용이 없는 태그(void elements)는 중첩이 불가능하다. -->
  <img src="./image/test.jpg" /> <input type="search" />
  ```

- Element(요소): '시작태그 + 내용 + 종료태그' 세가지를 합쳐서 Element(요소)라고 부른다.

- Attribute(속성): 태그에 추가 정보를 제공하거나 태그의 동작이나 표현을 제어할 수 있는 설정값이다. 속성이름="속성값" 형태로 사용한다. 여러가지 속성을 사용할 때에는 공백으로 구분한다.

  ```html
  <h1 id="myID" class="myClass">Hello!</h1>
  ```

#### HTML 문서 기본 구조

HTML 문서는 요소의 집합으로 이루어져 있으며, 기본 구조는 다음과 같이 구성된다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>HTML</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

#### 주요 태그 목록

- `<a>` : 다른 페이지로 이동할 때 사용한다. 이동할 링크를 나타내는 `href` 속성을 반드시 가져야 한다. `href`의 속성값에 "주소" 대신 "#id"를 쓰면 페이지 내 특정 요소로 초점을 이동한다. `target` 속성으로 링크된 페이지를 어디에 표시할지(새 창, 현재 페이지 등) 나타낼 수 있다.

  ```html
  <a href="http://www.naver.com/" target="_blank">네이버</a>
  ```

- `<div>`와 `<span>` : 태그 자체에 아무 의미가 없으며, 단순히 요소들을 묶기 위해 사용되는 태그. 스타일을 주거나 서버에 보내는 데이터를 담기 위한 용도로 활용한다.

  ```html
  <div><span>This</span> is an apple.</div>
  ```

- `<ul>`과 `<ol>` : `ul`(unordered list)는 순서가 없는 목록을, `ol`(ordered list)는은 순서가 있는 목록을 표현할 때 사용한다.

  ```html
  <ul>
    <li>Love</li>
    <li>Hope</li>
    <li>Faith</li>
    ...
  </ul>
  ```

- `<img>` : HTML 문서에 이미지를 삽입하기 위해 사용한다. `img` 태그에는 `src`와 `alt` 두가지 속성이 반드시 포함되어야 한다. `src` 속성은 이미지의 경로를 지정하며, `alt` 속성은 이미지를 대체하는 텍스트를 표현한다. `height`와 `weight` 속성으로 크기를 지정할 수 있다.

#### HTML input form 요소

사용자로부터 데이터를 입력받아야 하는 경우 사용되는 요소들을 Form 요소라고 한다.

- `<input>` : `type` 속성과 함께 사용되어 여러 종류의 입력 양식으로 사용된다.

1. `type="text"` : 주로 아이디와 같이 단순한 텍스트를 입력할 때 사용한다. `placeholder` 속성으로 미리 표시될 값을 지정할 수 있다.

```html
<input type="text" placeholder="ID" />
```

2. `type="password"` : 암호와 같이 공개할 수 없는 내용을 입력할 때 사용

```html
<input type="password" />
```

3. `type="radio"` : 중복 선택이 불가능한 라디오 버튼을 만들 때 사용

```html
<input type="radio" name="fav" /> Yes <input type="radio" name="fav" /> No
```

4. `type="checkbox"` : 중복 선택이 가능한 체크박스를 만들 때 사용

```html
<input type="checkbox" name="hobby" /> Apple
<input type="checkbox" name="hobby" /> Banana
<input type="checkbox" name="hobby" /> Coffee
```

5. `type="file"` : 파일을 서버에 올릴 때 사용

```html
<input type="file" />
```

6. `type="submit|reset|image|button"` : submit, reset, image, button 타입은 모두 클릭 가능한 버튼을 만듭니다.

- submit : form의 값을 전송하는 버튼
- reset : form의 값을 초기화하는 버튼
- image : 이미지를 삽입할 수 있는 버튼 (submit과 동작이 동일함)
- button : 아무 기능이 없는 버튼

```html
<form action="./test.html">
  메시지: <input type="text" name="message" /><br />
  <input type="submit" />
  <input type="reset" />
  <input type="image" src="./img/test.jpg" alt="click" width="50" height="50" />
  <input type="button" value="버튼" />
</form>
```

##### 다른 폼 요소

1. `<select>` : 콤보박스라고도 불린다. 몇 개의 선택지를 리스트 형태로 노출하고 그중 하나를 선택할 수 있게 해 준다.

```html
<select>
  <option>서울</option>
  <option>대전</option>
  <option>대구</option>
  ...
</select>
```

2. `<textarea>` : 한 줄만을 입력할 수 있는 `<input type="text" >`와 달리 여러 줄의 텍스트를 입력할 때 사용. `rows`와 `cols` 속성으로 크기를 지정할 수 있다.

```html
<textarea rows="5" cols="30">
  ...
</textarea>
```

3. `<button>` : 버튼을 만들 때 사용하며 submit, reset, button 3가지의 타입이 있다. `<input type="submit|reset|button" >`과 모두 같은 기능을 하지만, 내용을 안에 넣을 수 있으므로 좀 더 자유로운 스타일 표현이 가능하다.

```html
<button type="submit|reset|button">버튼</button>
```

#### HTML 작성시 유의사항

- 기본적으로 HTML은 두 칸 이상의 공백과 줄바꿈을 모두 무시한다. CSS로 공백처리 방식을 설정할 수 있다.

- 블록 레벨 요소: 부모 요소의 가로 영역에 맞게 꽉 채워져 표현되는 요소. 양옆으로 다른 요소가 배치되지 않게 박스를 생성하므로 박스의 위아래로 줄 바꿈이 생긴다.
  ex) div, h1~h6, p, ul, li, table 등

- 인라인 레벨 요소: 하나의 라인 안에서 자신의 내용만큼의 박스를 만드는 요소. 라인의 흐름을 끊지 않고 요소 앞 뒤로도 줄 바꿈이 되지 않아 다른 인라인 요소들이 위치할 수 있다.
  ex) span, i, img, em, strong, a 등

## Reference

- <a href="https://www.edwith.org/boostcourse-ui/joinLectures/19142">[부스트코스] 웹 UI 개발</a>
- <a href="https://www.w3schools.com/">w3schools</a>
- <a href="https://developer.mozilla.org/ko/docs/Learn/HTML">MDN - HTML 학습하기</a>
