// 슬라이드 자동 전환 (index.html에서만 동작)
(function () {
  const slides = document.querySelectorAll(".slide");
  if (!slides || slides.length === 0) return;

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 3000); // 3초마다 자동 전환
})();
