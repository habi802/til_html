# 메인 > 트립 영역

```html
<div class="tour">
  <div class="section_top">
    <h2 class="section_title">투어 특가</h2>
    <span class="section_desc">마감 임박! 금주의 특가 여행 추천</span>
  </div>
  <div class="section_list">
    <!-- Start 목록 영역 -->
    <div class="section_category">
      <ul class="section_category_bts">
        <li><button>마감임박</button></li>
        <li><button>패키지</button></li>
        <li><button>국내숙소</button></li>
        <li><button>해외숙소</button></li>
        <li><button>투어/입장권</button></li>
      </ul>
    </div>
    <div class="section_slide">
      <!-- Start 추후 JSON 데이터 연동으로 변경 예정 -->
      <div class="item">
        <a href="#">
          <img src="images/v3.jpg" alt="나트랑" title="나트랑" />
          <span>나트랑</span>
          <span>[10%쿠폰] 아동 동반 가족여행 강력 추천</span>
          <p>
            방콕/파타야 5일, 중대형기종(347석) 탑승, 24년 오픈 5성 윈덤 좀티엔
            파타야, 마사지 2시간, 핵심일정 포함
          </p>
          <span><b>109,000</b>원~</span>
        </a>
      </div>
      <!-- End 추후 JSON 데이터 연동으로 변경 예정 -->
    </div>
    <!-- End 목록 영역 -->
  </div>
  <div class="section_bts">
    <a href="#">
      투어 홈 바로가기
      <img src="images/icon_linkArrow.svg" alt="더보기" title="더보기" />
    </a>
  </div>
</div>
```

# CSS

## 1. css 작성법 3가지

- 작성법 3가지 중에 누가 최종적으로 적용되는가? (누가 힘이 센가?)

### 1.1. inline 방식

- html 태그에 직접 작성해 주는 방식

```html
<body style="background-color: skyblue; color: red;"></body>
```

```html
<style>
  body {
    background-color: hotpink;
    color: red;
  }
</style>
```

### 1.2. link 방식

- file 로 작성해서 link 하는 방식 (경로/파일명.css)

```html
<link rel="stylesheet" href="css/common.css" />
```

- css 폴더/common.css 파일을 생성

```css
body {
  background-color: hotpink;
  color: red;
}

div.wrap {
  border: 5px solid black;
}

header {
  background-color: yellow;
}
```

### 1.3. @import 방식

- css 파일에서 또 다른 css 파일을 참조하는 방식

## 2. 모든 태그에 초기화 진행하기

- 웹 브라우저마다 기본적인 css는 적용이 되어있음.
- 그래서, 웹 브라우저마다 모양이 다르게 보인다.
- 아래 내용은 기본 css 값으로 추천합니다.

```css
@charset "utf-8";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* outline-style: none; */
}
```

## 3. 선택하는 법 (selector)

### 3.1. 태그 선택법

```css
태그 {
}
```

- css/common.css 예제

```css
@charset "utf-8";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* outline-style: none; */
}

/* 태그 선택 : 추천하는 각 태그 별 기본값 */
a {
  text-decoration: none;
  color: #000000;
}
ul {
  list-style: none;
  padding: 100px;
}
html {
  width: 100%;
  /* 디자인 보고 수정 */
  font-size: 12px;
}
body {
  width: 100%;
  font-size: 1rem;
  /* 디자인 보고 수정 */
  color: #000000;
  /* 글꼴이 필요로 함. */
}
```

### 3.2. 클래스 선택법

```css
태그.클래스명 {
}
```

```css
.클래스명 {
}
```
