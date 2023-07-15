let images = [/*"IMG/sprinter-truck.jpg",*/"IMG/sprinter-truck2.jpg", "IMG/sprinter-truck3.jpg", "IMG/sprinter-truck4.jpg"/*, "IMG/sprinter-truck5.jpg"*/];
let currentIndex = 0;

function switchImage() {
  currentIndex = (currentIndex + 1) % images.length;
  let imageElement = document.getElementById("image");
  imageElement.src = images[currentIndex];
}
setInterval(switchImage, 5000);

document.addEventListener('DOMContentLoaded', function() {
  // Get all the anchor tags
  const links = document.querySelectorAll('a');

  // Attach a click event listener to each anchor tag
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Add the fade-out class to the content section
      const content = document.querySelector('.content');
      content.classList.add('fade-out');

      // Wait for the fade-out animation to finish
      setTimeout(function() {
        // Navigate to the new page
        window.location.href = link.href;
      }, 500); // Adjust the timeout to match the duration of the fade-out animation
    });
  });
});