
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


//showHeader

function showHeader() {
  const header = document.querySelector('.l-header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 170) {
      header.classList.add('show');
    } 
    else {
      header.classList.remove('show');
    }
  });
}


if (window.location.pathname.endsWith('index.html') || 
    window.location.pathname === '/sucre_memoir/' ||
    window.location.pathname === '/sucre_memoir') {

    showHeader();
} else {
  const header = document.querySelector('.l-header');
  if (header) {
    header.classList.add('show');
  }
}

//showMessage

window.addEventListener("DOMContentLoaded", () => {
  const notification = document.getElementById('notification');
  const closeBtn = document.getElementById('closeBtn');
  const addCartBtns = document.querySelectorAll('.p-dessert__add-btn');
  let hideTimeout;

  // 綁定「加入購物車」按鈕
  addCartBtns.forEach(btn => {
    btn.addEventListener('click', () => showNotification());
  });

  // 綁定「關閉」按鈕
  closeBtn.addEventListener('click', hideNotification);

  function showNotification() {
    clearTimeout(hideTimeout);
    notification.classList.add('show');
    notification.classList.remove('hiding');

    // 3 秒後自動隱藏
    hideTimeout = setTimeout(hideNotification, 3000);
  }

  function hideNotification() {
    notification.classList.add('hiding');

    setTimeout(() => {
      notification.classList.remove('show', 'hiding');
    }, 300);

    clearTimeout(hideTimeout);
  }
});


//篩選甜點
document.querySelectorAll('.p-dessert__filter-btn').forEach((tab) => {
    tab.addEventListener('click', (event) => {
      // 如果當前標籤未啟用才執行
      const clickedTab = event.currentTarget;
      if (!clickedTab.classList.contains('active')) {
        
        // 1. 移除所有標籤的啟用樣式
        document.querySelectorAll('.p-dessert__filter-btn').forEach((t) => {
          t.classList.remove('active');
        });
        
        // 2. 為當前標籤添加啟用樣式
        clickedTab.classList.add('active');
        
      }
    });
  });
