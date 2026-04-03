const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    item.style.opacity = index === currentIndex ? '1' : '0.5';
  });
  currentIndex = (currentIndex + 1) % items.length;
}

setInterval(updateCarousel, 3000);