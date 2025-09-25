// section2.js
(function () {
  const track = document.getElementById('track');
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let current = 0;
  const total = slides.length;

  function update() {
    track.style.transform = `translateX(${-current * 100}%)`;
    prevBtn.classList.toggle('disabled', current === 0);
    nextBtn.classList.toggle('disabled', current === total - 1);
  }

  function goTo(index) {
    if (index < 0 || index >= total) return;
    current = index;
    update();
  }

  // === 桌機：左右按鈕 & 鍵盤 ===
  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });

  // === 手機：觸控滑動 ===
  let startX = 0;
  let deltaX = 0;
  const threshold = 50; // 滑動超過 50px 才算一次切換

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    deltaX = 0;
  });

  track.addEventListener('touchmove', (e) => {
    deltaX = e.touches[0].clientX - startX;
    // 可選：跟手移動效果（輕微拖曳）
    track.style.transition = 'none';
    track.style.transform = `translateX(calc(${-current * 100}% + ${deltaX}px))`;
  });

  track.addEventListener('touchend', () => {
    track.style.transition = ''; // 恢復原本過渡
    if (deltaX > threshold) {
      goTo(current - 1); // 往右滑 → 上一張
    } else if (deltaX < -threshold) {
      goTo(current + 1); // 往左滑 → 下一張
    } else {
      // 不達門檻 → 回原位
      update();
    }
  });

  update();
})();
