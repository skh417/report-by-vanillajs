"use strict";

console.log(scrollY < section[0].offsetTop);

Array.prototype.forEach.call(navMenus, (list) => {
  list.addEventListener("click", function () {
    const index = this.getAttribute("index");

    const scrollOption = {
      left: 0,
      top: section[index].offsetTop - 140,
      behavior: "smooth",
    };

    window.scroll(scrollOption);
  });
});

window.addEventListener("scroll", moveMenuUnderbar);

const menuUnderbarHandler = (idx) => {
  menuUnderbar.style.width = `${navMenus[idx].offsetWidth}px`;
  menuUnderbar.style.transform = `translate3d(${navMenus[idx].offsetLeft}px, 0 ,0)`;
  navMenus.forEach((li) =>
    Number(li.getAttribute("index")) === idx
      ? (li.className = "active")
      : (li.className = "")
  );
};

function moveMenuUnderbar() {
  if (window.scrollY < section[0].offsetTop) {
    menuUnderbarHandler(0);
  }
  if (window.scrollY > section[1].offsetTop - 300) {
    menuUnderbarHandler(1);
  }
  if (window.scrollY > section[2].offsetTop - 300) {
    menuUnderbarHandler(2);
  }
  if (window.scrollY > section[3].offsetTop - 300) {
    menuUnderbarHandler(3);
  }
  if (window.scrollY > section[4].offsetTop - 700) {
    menuUnderbarHandler(4);
  }
}

// 상세내역 펼쳐보기, 감추기
Array.prototype.forEach.call(extensionButtons, function (button) {
  button.addEventListener("click", function () {
    let secIndex = this.getAttribute("secIndex");

    if (secIndex) {
      toggleHidenShowClass(secIndex, this);
    }
  });
});
