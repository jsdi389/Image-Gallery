console.log("Hello");

const mainImage = document.getElementById("main-image");
const images = ["camera.jpeg", "coffeeshop.jpeg", "fishing.jpeg"];
let currentIndex = 0;

function nextImage() {
  currentIndex++;
  mainImage.src = images[currentIndex];
}

const next = document.getElementById("next");
next.addEventListener("click", nextImage);

function prevImage() {
  currentIndex--;
  mainImage.src = images[currentIndex];
}

const previous = document.getElementById("prev");
previous.addEventListener("click", prevImage);

// unable to figure out how to get images to loop round
const loopImages = document.getElementById("loop");
for (let i = 0; i < images.length; i++) {
  k;
  const loopImages = document.createElement("loopImages");
  images.textContent = images[i];
  loopImages.appendChild("loopImages");
}
