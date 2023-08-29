//HTML elements
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
let activeImage = document.querySelector('img.active');
//index of the first active element;
let i = 0;
const slideshowImages = document.querySelectorAll('.slider-img');


//show the next item
const nextItem = function() {
    activeImage.classList.remove('active');
    if (i >= 5) {
        i = 0;
    } else {
        i += 1;
    }
    slideshowImages[i].classList.add('active');
    activeImage = slideshowImages[i];
}

//show the previous item 
const previousItem = function() {
    activeImage.classList.remove('active');
    if (i <= 0) {
        i = 5;
    } else {
        i -= 1;
    }
    slideshowImages[i].classList.add('active');
    activeImage = slideshowImages[i];
}

//event listeners
previousButton.addEventListener('click', previousItem);
nextButton.addEventListener('click', nextItem);
