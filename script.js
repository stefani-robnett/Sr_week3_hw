// Grab the elements we need
const thumbnails = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("main-image");
const caption = document.getElementById("caption");
const pauseBtn = document.getElementById("pause-btn");
const playBtn = document.getElementById("play-btn");

let currentIndex = 0;  // which thumbnail is showing
let intervalID = null; // ID returned by setInterval, used to stop it
const delay = 3000;    // switch images every 3 seconds

// Show the thumbnail at the given index in the large display
function showImage(index) {
  const thumb = thumbnails[index];
  currentIndex = index;

  // Fade out, swap the image, then fade back in
  mainImage.classList.add("fade");

  setTimeout(function () {
    mainImage.src = thumb.src;
    mainImage.alt = thumb.alt;
    caption.textContent = thumb.alt;
    mainImage.classList.remove("fade");
  }, 300);

  // Highlight the selected thumbnail
  thumbnails.forEach(function (t) {
    t.classList.remove("active");
  });
  thumb.classList.add("active");
}

// Move to the next image, looping back to the first after the last
function nextImage() {
  const nextIndex = (currentIndex + 1) % thumbnails.length;
  showImage(nextIndex);
}

// Start automatic switching
function play() {
  if (intervalID === null) {
    intervalID = setInterval(nextImage, delay);
  }
  playBtn.disabled = true;
  pauseBtn.disabled = false;
}

// Stop automatic switching
function pause() {
  clearInterval(intervalID);
  intervalID = null;
  playBtn.disabled = false;
  pauseBtn.disabled = true;
}

// When a thumbnail is clicked, show it in the large display
thumbnails.forEach(function (thumb, index) {
  thumb.addEventListener("click", function () {
    showImage(index);

    // If the slideshow is running, restart the timer so the
    // clicked image gets the full delay before switching
    if (intervalID !== null) {
      pause();
      play();
    }
  });
});

pauseBtn.addEventListener("click", pause);
playBtn.addEventListener("click", play);

// Start the slideshow when the page loads
play();
