window.addEventListener("DOMContentLoaded", function () {
  const header = this.document.querySelector(".header");
  header.onclick = function () {
    alert("반가워!");
  };
  header.addEventListener("click", function () {
    alert("표준아, 반가워!");
  });

  const logo = this.document.querySelector(".logo");
  const search = this.document.querySelector(".search");
  const member = this.document.querySelector(".header_top_right");
  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");

  this.window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const headerTopH = this.document.querySelector(".header_top");
    console.log(headerTopH.offsetHeight);

    if (scrollY <= headerTopH.offsetHeight) {
      console.log("모두 보여라");
    } else {
      console.log("일부가 보여라");
    }
  });
});
