const scrollBtn = () => {
   const upArrow = document.querySelector('.upArrow');

   const run = () => {
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

   if (window.screen.availWidth > 767) {
      run();
   }

      
}

export default scrollBtn;