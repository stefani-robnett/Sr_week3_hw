// Grab the elements we need
const thumbnails = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("main-image");
const caption = document.getElementById("caption");

// When a thumbnail is clicked, show it in the large display
thumbnails.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
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
  });
});
