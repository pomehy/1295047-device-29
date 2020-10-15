const mapLink = document.querySelector('.contacts__map');
const mapModal = document.querySelector('.map-modal');
const mapModalClose = document.querySelector('.map-modal--close');

const writeUsLink = document.querySelector('.contacts__link');
const writeUsModal = document.querySelector('.write-us');
const writeUsClose = document.querySelector('.write-us--close');

const userName = writeUsModal.querySelector('[name=user-name]');
const userEmail = writeUsModal.querySelector('[name=user-email]');
const userText = writeUsModal.querySelector('[name=user-text]');

const writeUsForm = writeUsModal.querySelector('form');
const storageUserName = localStorage.getItem('user-name');

const isStorageSupport = true;
let storage = '';


let promoSliderItems = document.querySelectorAll('.slider__item');
let promoSliderButtons = document.querySelectorAll('.slider__button');

let serviceSliderItems = document.querySelectorAll('.service-slider__item');
let serviceSliderButtons = document.querySelectorAll('.service__button');
let serviceItem = document.querySelectorAll('.service__item');

// для карты

mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapModal.classList.add('modal-show');
});

mapModalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapModal.classList.remove('modal-show');
});


// для формы обратной связи


try {
  storage = localStorage.getItem('user-name');
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUsModal.classList.add('modal-show');
  if (storageUserName) {
    userName.value = storageUserName;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

writeUsClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUsModal.classList.remove('modal-show');
  writeUsModal.classList.remove('modal-error');
});


writeUsForm.addEventListener('submit', function(evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    writeUsModal.classList.remove('modal-error');
    writeUsModal.offsetWidth = writeUsModal.offsetWidth;
    writeUsModal.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('user-name', userName.value);
    }
  }
});


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains('modal-show')) {
      evt.preventDefault();
      mapModal.classList.remove('modal-show');
    } else if (writeUsModal.classList.contains('modal-show')) {
      evt.preventDefault();
      writeUsModal.classList.remove('modal-show');
      writeUsModal.classList.remove('modal-error');
    }
  }
});


// слайдер с товарами

promoSliderButtons[0].addEventListener('click', function(evt) {
  evt.preventDefault();
  promoSliderItems[0].classList.add('slider__item--active');
  promoSliderItems[1].classList.remove('slider__item--active');
  promoSliderItems[2].classList.remove('slider__item--active');

  promoSliderButtons[0].classList.add('slider__button--active');
  promoSliderButtons[1].classList.remove('slider__button--active');
  promoSliderButtons[2].classList.remove('slider__button--active');
});

promoSliderButtons[1].addEventListener('click', function(evt) {
  evt.preventDefault();
  promoSliderItems[1].classList.add('slider__item--active');
  promoSliderItems[0].classList.remove('slider__item--active');
  promoSliderItems[2].classList.remove('slider__item--active');
  promoSliderButtons[1].classList.add('slider__button--active');
  promoSliderButtons[0].classList.remove('slider__button--active');
  promoSliderButtons[2].classList.remove('slider__button--active');
});

promoSliderButtons[2].addEventListener('click', function(evt) {
  evt.preventDefault();
  promoSliderItems[2].classList.add('slider__item--active');
  promoSliderItems[0].classList.remove('slider__item--active');
  promoSliderItems[1].classList.remove('slider__item--active');
  promoSliderButtons[2].classList.add('slider__button--active');
  promoSliderButtons[0].classList.remove('slider__button--active');
  promoSliderButtons[1].classList.remove('slider__button--active');
});


// слайдер преимуществ

serviceSliderButtons[0].addEventListener('click', function(evt) {
  evt.preventDefault();
  serviceSliderItems[0].classList.add('service-slider__item--active');
  serviceSliderItems[1].classList.remove('service-slider__item--active');
  serviceSliderItems[2].classList.remove('service-slider__item--active');

  serviceItem[0].classList.add('service__item--active');
  serviceItem[1].classList.remove('service__item--active');
  serviceItem[2].classList.remove('service__item--active');
});

serviceSliderButtons[1].addEventListener('click', function(evt) {
  evt.preventDefault();
  serviceSliderItems[1].classList.add('service-slider__item--active');
  serviceSliderItems[0].classList.remove('service-slider__item--active');
  serviceSliderItems[2].classList.remove('service-slider__item--active');
  serviceItem[1].classList.add('service__item--active');
  serviceItem[0].classList.remove('service__item--active');
  serviceItem[2].classList.remove('service__item--active');
});

serviceSliderButtons[2].addEventListener('click', function(evt) {
  evt.preventDefault();
  serviceSliderItems[2].classList.add('service-slider__item--active');
  serviceSliderItems[0].classList.remove('service-slider__item--active');
  serviceSliderItems[1].classList.remove('service-slider__item--active');
  serviceItem[2].classList.add('service__item--active');
  serviceItem[0].classList.remove('service__item--active');
  serviceItem[1].classList.remove('service__item--active');
});

