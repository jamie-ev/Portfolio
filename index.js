/* slideshow 1 */
let slideIndex = 0;
showSlides(slideIndex);

// function to show/hide slides and make dots active
function showSlides() {
  let slides = document.getElementsByClassName('slide');
  let dots = document.getElementsByClassName('dot');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add('active');
}

// function for manual controls from prev/next
function changeSlide(n) {
  slideIndex += n;
  if (slideIndex > 6) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = 6;
  }
  showSlides(slideIndex);
}

// function for manual controls from bottom indicator dots
function goToSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

/* slideshow 2 */
let slideIndex2 = 0;
showSlides2();

// show/hide slides
function showSlides2() {
  let slides = document.getElementsByClassName('slide2');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {
    slideIndex2 = 1
  }
  slides[slideIndex2-1].style.display = "block";
  setTimeout(showSlides2, 4500); // Change image every 4.5 seconds
} 

/* project tiles section */

// function to hover description over project tiles
function showDescription(n) {
  let descriptions = document.getElementsByTagName('h3');
  descriptions[n].style.visibility = 'visible';
}

// function to hide description over project tiles
function hideDescription(n) {
  let descriptions = document.getElementsByTagName('h3');
  descriptions[n].style.visibility = 'hidden';
}
