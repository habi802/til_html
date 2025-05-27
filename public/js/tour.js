// 이미지 동의 리소스가 불러들여지면 그 때 이벤트를 실행하는것이 좋음
window.addEventListener("load", function () {
  // api 주소
  const apiUrl = "http://127.0.0.1:5500/public/api/tour.json";
  // 현재 출력한 카테고리
  let cateFocusIndex = 0;
  // 카테고리 button 태그 DOM 보관
  let cateButtonArr = [];
  // 카테고리 글자 배열
  let cateNameArr = [];
  // 카테고리별 목록 배열
  let cateListArr = [];
  // 투어 슬라이드 변수
  let swTour;

  // api 호출 함수
  async function getData(_url, _fn) {
    try {
      const res = await fetch(_url);
      const data = await res.json();
      _fn(data);
    } catch (error) {
      console.log(error);
    }
  }

  // 데이터를 처리하는 함수
  const parseData = function (_data) {
    //console.log(_data);
    // 카테고리 글자만 추출하기
    const cateArr = _data.map(function (item, index, arr) {
      return item.cate;
    });
    cateNameArr = [...cateArr];

    // 카테고리 목록만 추출하기
    const listArr = _data.map(function (item, index, arr) {
      return item.list;
    });
    cateListArr = [...listArr];

    makeTourInit();
    activeCateFocus();
    addBtsEvent();
  };

  // 번호에 따라서 실제 화면에 보여줄 tag 만들기
  // 최초 데이터가 전달되면 1번만 실행
  // 카테고리 버튼은 1번만 만들어도 됨.
  function makeTourInit() {
    // 배치될 장소
    const cateBts = document.querySelector(".section_category_bts");
    // 최종 html 글자
    let html = "";
    // for (let i = 0; i < cateNameArr.length; i++) {
    //   const tag = `<li><button>${cateNameArr[i]}</button></li>`;
    //   html = html + tag;
    // }

    cateNameArr.forEach(function (item, index) {
      const tag = `<li><button>${item}</button></li>`;
      html = html + tag;
    });

    cateBts.innerHTML = html;

    // 버튼 태그 모음
    cateButtonArr = document.querySelectorAll(
      ".section_category_bts > li > button"
    );
  }

  // 실시간으로 생성된 버튼에 이벤트 연결하기
  function addBtsEvent() {
    cateButtonArr.forEach(function (item, index) {
      // 카테고리 현재 인덱스 변경하기
      item.addEventListener("click", function () {
        // 동일한 버튼 클릭 시 작동 방지
        if (cateFocusIndex === index) {
          return;
        }
        cateFocusIndex = index;
        removeFocusAll();
        activeCateFocus();
      });
    });
  }

  // 포커스 모두 제거하기
  function removeFocusAll() {
    cateButtonArr.forEach(function (item) {
      item.classList.remove("cate_focus");
    });
  }

  // 카테고리 버튼에 현재 포커스 표현하기
  function activeCateFocus() {
    cateButtonArr[cateFocusIndex].classList.add("cate_focus");
    makeTourListHtml();
  }

  // 목록 html 을 만든다.
  function makeTourListHtml() {
    console.log("어느 목록을 출력할 것인가? " + cateListArr[cateFocusIndex]);
    // 1. html 태그 만들기
    // 1.1. 어디다가 만들지? querySelector 찾아줌.
    const swTourWrap = document.querySelector(".sw_tour .swiper-wrapper");
    // 1.2. html 로 만들기
    let html = "";
    const listArr = cateListArr[cateFocusIndex];
    listArr.forEach(function (item) {
      const tag = `
      <div class="swiper-slide">
        <div class="item">
          <a href="${item.link}">
            <div class="item_image">
              <img
                src="${item.image}"
                alt="${item.title}"
                title="${item.title}"
              />
            </div>
            <span class="item_name">${item.city}</span>
            <div class="item_text">
              <span class="item_coupon">
                ${item.title}
              </span>
              <p class="item_desc">
                ${item.content}
              </p>
              <span class="item_price"><b>${item.price}</b>원~</span>
            </div>
          </a>
        </div>
      </div>
      `;
      html = html + tag;
    });
    swTourWrap.innerHTML = html;

    // 2. 항상 슬라이드가 만들어져 있다면 삭제하고
    if (swTour) {
      // swiper 를 제거합니다. (swiper 사이트의 레퍼런스 참조)
      swTour.destroy(true, true);
    }

    // 3. 슬라이드를 생성해야 합니다.
    let swiper = new Swiper(".sw_tour", {
      // 한줄에 4개 나옴
      slidesPerView: 4,
      // 슬라이드 사이 공간
      spaceBetween: 5,
      // 한번에 4개씩 이동
      slidesPerGroup: 4,

      grid: {
        rows: 1,
        fill: "row",
      },

      navigation: {
        nextEl: ".tour_next",
        prevEl: ".tour_prev",
      },

      // 화면의 해상도에 따라 작동
      breakpoints: {
        640: {
          slidesPerView: 4,
          spaceBetween: 10,
          slidesPerGroup: 4,
          grid: {
            rows: 1,
            fill: "row",
          },
        },
        760: {
          slidesPerView: 4,
          spaceBetween: 15,
          slidesPerGroup: 4,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        960: {
          slidesPerView: 4,
          spaceBetween: 24,
          slidesPerGroup: 4,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 24,
          slidesPerGroup: 2,
          grid: {
            rows: 1,
            fill: "row",
          },
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 26,
          slidesPerGroup: 3,
          grid: {
            rows: 1,
            fill: "row",
          },
        },
      },
    });
  }

  // 함수 호출
  getData(apiUrl, parseData);
});
