
console.log("下拉選單 JS 檔已成功載入！");
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
