let slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId;

document.addEventListener("DOMContentLoaded", function() {
  showSlide();
  automaticMove();
})

function automaticMove() {
  intervalId = setInterval(nextSlide, 3000);
}

function showSlide(index) {
  slides[slideIndex].classList.add("show-slide");
}

// hides slide

function prevSlide() {
 showSlide(slideIndex--);
    slides[slideIndex + 1].classList.remove("show-slide");
}

function nextSlide() {
  showSlide(slideIndex++);
  slides[slideIndex - 1].classList.remove("show-slide");
}


