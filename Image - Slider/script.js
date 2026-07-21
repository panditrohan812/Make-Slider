const images = [
  "images/peak.png",
  "images/lake.png",
  "images/valley.png",
  "images/fjord.png",
];

let index = 0;

const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showImage() {
  sliderImage.src = images[index];
}

function nextSlide() {
  index = (index + 1) % images.length;
  showImage();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

let startX = 0;
let isDragging = false;

sliderImage.addEventListener("mousedown", function (e) {
  isDragging = true;
  startX = e.clientX;
});

document.addEventListener("mouseup", function (e) {
  if (!isDragging) return;
  const endX = e.clientX;
  if (endX - startX > 50) {
    prevSlide();
  } else if (startX - endX > 50) {
    nextSlide();
  }
  isDragging = false;
});

setInterval(nextSlide, 4000);
