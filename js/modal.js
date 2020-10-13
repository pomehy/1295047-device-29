const mapLink = document.querySelector('.contacts__map');
const mapModal = document.querySelector('.map-modal');

const writeUsLink = document.querySelector('.contacts__link');
const writeUsModal = document.querySelector('.write-us');

const closeModal = document.querySelector('.close-modal');

// Для карты

mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapModal.classList.add('modal-show');
});

closeModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapModal.classList.remove('modal-show');
});
