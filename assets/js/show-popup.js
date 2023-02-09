const popupTrigger = document.querySelector('.popup-trigger');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

popupTrigger.addEventListener('click', (e) => {
  popup.classList.add('show');
  document.body.style.cssText = `overflow: hidden`;

});

popupClose.addEventListener('click', (e) => {
  popup.classList.remove('show');
  document.body.style.cssText = '';
});

// close on click on overlay

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('show');
    document.body.style.cssText = '';
  }
});

// close on press of escape button

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && popup.classList.contains('show')) {
      popup.classList.remove('show');
      document.body.style.cssText = '';
    }
  });
