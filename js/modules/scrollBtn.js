const scrollBtn = () => {
   const upArrow = document.querySelector('.upArrow');

   function setScrollTo (top, left) {
      window.scrollTo({
         top,
         left,
         behavior: 'smooth'
      });
   }

   upArrow.addEventListener('click', () => {
      setScrollTo(0, 0)
   })

   window.addEventListener('scroll', function() {
      if(window.pageYOffset > 199) {
         upArrow.classList.add('visible')
      }
      if(window.pageYOffset < 199) {
         upArrow.classList.remove('visible')
      }
    });

}

export default scrollBtn;