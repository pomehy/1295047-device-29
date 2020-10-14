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
  storage = localStorage.getItem("login");
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





