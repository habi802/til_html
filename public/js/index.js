// html 의 document 가 모두 로드 되면 실행하기
// html 의 이미지, 파일 등등 리소스가 준비되면 실행
// window.onload = function () {
//   const wrap = document.querySelector(".wrap");
//   console.log(wrap);
// };

// window.onload = function () {
//   console.log("안녕");
// };

// 표준입니다.
window.addEventListener("load", function () {
  const wrap = document.querySelector(".wrap");
  //console.log(wrap);
});

window.addEventListener("load", function () {
  //console.log("안녕");
});

window.addEventListener("DOMContentLoaded", function () {
  //console.log("로딩 완료");
});
