const popup = () => {
   const popup = document.querySelector('.popup');
   const trigger = document.querySelector('#singIn');
   const popupBody = document.querySelector('.popup__body');
   const popupClose = document.querySelector('.popup__close');
   const form = document.querySelector('.popup__form');
   trigger.addEventListener('click', () => {
      if (!popup.classList.contains('visible')) {
         popup.classList.add('visible')
      } else {
         popup.classList.remove('visible')
      }
   })

   popupBody.addEventListener('click', (e) => {
      if (!e.target.closest('.popup__content')) {
         popup.classList.remove('visible')
      }
   })

   popupClose.addEventListener('click', () => {
      popup.classList.remove('visible')
   })

   form.addEventListener('submit', (e) => {
      e.preventDefault();
   })
}

export default popup