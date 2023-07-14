let images = [/*"IMG/sprinter-truck.jpg",*/"IMG/sprinter-truck2.jpg", "IMG/sprinter-truck3.jpg", "IMG/sprinter-truck4.jpg"/*, "IMG/sprinter-truck5.jpg"*/];
let currentIndex = 0;

function switchImage() {
  currentIndex = (currentIndex + 1) % images.length;
  let imageElement = document.getElementById("image");
  imageElement.src = images[currentIndex];
}

setInterval(switchImage, 5000);