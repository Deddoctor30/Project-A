function burger() {
   const content = document.querySelector('.burger__content'),
         icon = document.querySelector('.burger__icon'),
         burgerTrigger = document.querySelector('.burger__trigger'),
         body = document.querySelector('body');
   burgerTrigger.addEventListener('click', () => {
      content.classList.toggle('down');
      icon.classList.toggle('active');
      body.classList.toggle('stop-scrolling')
   });
};

export default burger;