function burger() {
   const content = document.querySelector('.burger__content'),
         icon = document.querySelector('.burger__icon'),
         burgerTrigger = document.querySelector('.burger__trigger');


   burgerTrigger.addEventListener('click', () => {

      // content.style.cssText = 'top: 0px'
      content.classList.toggle('down');
      icon.classList.toggle('active');



      // header.classList.toggle('menu-burger');
      // line.classList.toggle('line-wide');
      // menu.classList.toggle('menu-burger');
      // bar.classList.toggle('menu-burger');
      // burgerTrigger.classList.toggle('hide');
   });
};

export default burger;