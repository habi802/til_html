# JS 적용

- JS 는 크게 2가지로 분류됩니다.
- Node 용과 Web 용으로 분류합니다.

## JS 코딩 좋은 위치

- 가장 좋은 자리는 html 이 완료되는 시점

```js
// html 의 document 가 모두 로드 되면 실행하기
// html 의 이미지, 파일 등등 리소스가 준비되면 실행
// 표준입니다.
window.addEventListener("load", function () {});

// html 만 로드 완료를 체크합니다.
window.addEventListener("DOMContentLoaded", function () {});
```

## 요소(Element) 선택법

```js
// DOM 만 완성하면 됩니다. 기준으로 코드를 진행함.
window.addEventListener("DOMContentLoaded", function () {
  // 우리가 원하는 요소(Element) 를 선택하는 법?
  // - Tag 를 선택하고 싶어요. (Tag Element)
  this.document.getElementsByTagName("header");
  this.document.getElementsByClassName("header");
  // - CSS 선택자를 이용해서 선택하고 싶어요. (Css Selector)
  this.document.querySelector(".header");
  this.document.querySelectorAll(".header");
  // - ID 선택자를 이용해서 선택하고 싶어요. (Id Selector)
  this.document.getElementById("header");
});
```

```js
window.addEventListener("DOMContentLoaded", function () {
  const header = this.document.querySelector(".header");
  console.log(header);

  const logo = this.document.querySelector(".logo");
  console.log(logo);
  const search = this.document.querySelector(".search");
  console.log(search);
  const member = this.document.querySelector(".header_top_right");
  console.log(member);
  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");
  console.log(eventMenu);
});
```

## 다양한 이벤트의 이해

- 웹 브라우저가 체크하는 변화를 `이벤트` 라고 함.
- 이벤트 작성법 3가지

### 1. 태그에 직접 이벤트 작성하기

```html
<태그 on이벤트="코드"></태그>
<header class="header" onclick="alert('안녕')"></header>
```

### 2. 요소에 속성으로 이벤트 작성하기

```js
요소.on이벤트 = function () {
  코드;
};

const header = this.document.querySelector(".header");
header.onclick = function () {
  alert("반가워!");
};
```

### 3. 요소에 이벤트 핸들러로 이벤트 작성하기(표준)

```js
요소.addEventListner("이벤트", function () {
  코드;
});
header.addEventListener("click", function () {
  alert("표준아, 반가워!");
});
```

### 4. 활용 빈도가 높은 `윈도우 이벤트`

- `load`: html 의 document 가 모두 로드 되면 발생
- `DOMContentLoaded`: DOM 만 로드 되면 발생
- `resize`: 웹 브라우저 너비, 높이 변경 시 발생
- `scroll`: 웹 브라우저에 스크롤이 일어나면 발생

### 5. 활용 빈도가 높은 `마우스 이벤트`

- `click`: 마우스 클릭(왼쪽)
- `mouseenter`: 마우스 커서가 요소에 걸쳐지면
- `mouseleave`: 마우스 커서가 요소에서 벗어나면

### 6. 활용 빈도가 높은 `키보드 이벤트`

- `keyup`: 키보드에서 키 입력 후 이벤트
- `keydown`: 키보드에서 키 입력 시 이벤트
- `keypress`: 키보드에서 키 누르고 있으면 이벤트

### 7. 활용 빈도가 높은 Form 관련 이벤트 (추후 정리)
