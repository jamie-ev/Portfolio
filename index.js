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

// add keyboard control for prev button
document.getElementsByClassName("prev")[0].addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();  // cancel the default action, if needed 
    changeSlide(-1);  // trigger the changeSlide function
  }
}); 

// add keyboard control for next button
document.getElementsByClassName("next")[0].addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();  // cancel the default action, if needed 
    changeSlide(1);  // trigger the changeSlide function
  }
}); 

// function for manual controls from bottom indicator dots
function goToSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

// show/hide slides
function showProjectSlides(classname, indexer) {
  let slides = document.getElementsByClassName(classname);
  console.log(slides);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  indexer++;
  if (indexer > slides.length) {
    indexer = 1
  }
  slides[indexer-1].style.display = "block";
  setTimeout(() => showProjectSlides(classname, indexer), 4500); // Change image every 4.5 seconds
}

/* featured project slideshow */
let slideIndexFeatured = 0;
showProjectSlides('slide-two', slideIndexFeatured);

/* projects slideshow */
let slideIndexProjects = 0;
showProjectSlides('slide-three', slideIndexProjects);

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
