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


  //下拉選單 sp

 const dropdownHeader = document.getElementById('dropdownHeader');
    const menu = document.getElementById('dropdownMenu');
    const arrow = document.getElementById('arrow');
    const selectedText = document.getElementById('selectedText');
    const items = document.querySelectorAll('#dropdown-option');

    dropdownHeader.addEventListener('click', () => {
      menu.classList.toggle('open');
      arrow.classList.toggle('open');
    });

    items.forEach(item => {
      item.addEventListener('click', (e) => {
        items.forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        selectedText.textContent = item.textContent;
        menu.classList.remove('open');
        arrow.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('#dropdown-container')) {
        menu.classList.remove('open');
        arrow.classList.remove('open');
      }
    });


