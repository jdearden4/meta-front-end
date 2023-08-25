"use strict";

const submittedText = document.querySelector('.submitButtonDiv');
const form = document.querySelector('form');
const getInTouch = document.querySelector('.form h2');


const showSubmitMessage = function () {
    submittedText.style.display = 'block';
    form.style.display = 'none';
    getInTouch.innerHTML = 'Success!'
    console.log('submit message');
}



document.querySelector('.submitButton').addEventListener('click', showSubmitMessage);