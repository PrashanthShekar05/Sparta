const slides = document.querySelector('.slides'); //get all slide container 
const slideImg = document.querySelectorAll('.slides img'); // get all sides 
let currentIdx = 0; //the current slide index 
const slideCount = slideImg.length; // the number of slides 
const prev = document.querySelector('.prev'); //pre button
const next = document.querySelector('.next'); //next button
const slidesWidth = 740; //the area of one slide
const slideMargin = 0; // the value of margin between each slide 

//set the whole slides container area
slides.style.width = (slidesWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
  slides.style.left = -num * 740 + 'px';
  currentIdx = num;
}

prev.addEventListener('click', function () {
  /*if current currentIdx !==0 works , moveslides can runs.
  the previous button are not working when the first photo is on the page*/ 
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
  /*if currentIdx !==slideCount - 1 works , moveslides can runs.
  the next button are not working when the last photo is on the page*/ 

  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});


