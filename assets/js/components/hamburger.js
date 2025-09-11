console.log("ham 已成功載入！");

window.addEventListener("DOMContentLoaded", () => {
  const hamButton = document.querySelector(".js-hamburger");
  const menu = document.querySelector(".js-menu");
  let isMenuOpen = false;
  if (!hamButton || !menu) return;
  const anchors = menu.querySelectorAll("a");

  // --- 打開選單 ---
  const openMenu = () => {
    hamButton.classList.add("-open");
    menu.classList.add("-animating");
    menu.style.maxHeight = menu.scrollHeight + "px"; 
    document.body.style.overflow = "hidden";
    isMenuOpen = true;

    menu.addEventListener(
      "transitionend",
      () => {
        menu.classList.remove("-animating");
        menu.style.maxHeight = "none"; 
      },
      { once: true }
    );
  };

  // --- 關閉選單 ---
  const closeMenu = () => {
    hamButton.classList.remove("-open");
    menu.classList.add("-animating");
    menu.style.maxHeight = menu.scrollHeight + "px";

    requestAnimationFrame(() => {
      menu.style.maxHeight = "0px";
    });

    document.body.style.overflow = "";
    isMenuOpen = false;
  };

  hamButton.addEventListener("click", () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", closeMenu);
  });
});


//

const header = document.querySelector('.l-header');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    header.classList.add('show');
  } 
  else {
    header.classList.remove('show');
  }
});