let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function moveSlider(n) {
  slideIndex += n;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slider').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

  