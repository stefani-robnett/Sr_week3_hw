// Get the elements we need
const thumbnails = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("main-image");
const caption = document.getElementById("caption");


let currentIndex = 0;  // which thumbnail is showing
let intervalID = null; // ID returned by setInterval, used to stop it

function showImage(index) {
  const thumb = thumbnails[index];
  currentIndex = index;

    mainImage.src = thumb.src;
    mainImage.alt = thumb.alt;
    caption.textContent = thumb.alt;
    mainImage.classList.remove("fade");


  // Highlight the selected thumbnail
  thumbnails.forEach(function (t) {
    t.classList.remove("active");
  });
  thumb.classList.add("active");
}

// When a thumbnail is clicked, show it in the large display
thumbnails.forEach(function (thumb, index) {
  thumb.addEventListener("click", function () {
    showImage(index);

  });
});

