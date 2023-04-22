const header = () => {
   const infoTrigger = document.querySelector('#info-trigger');
   const infoInner = document.querySelector('.info__inner');
   const infoBlock = document.querySelector('.info');

   const authTrigger = document.querySelector('#auth-trigger');
   const authInner = document.querySelector('.auth__inner');
   const authBlock = document.querySelector('.auth');

   if (infoTrigger) {
      infoTrigger.addEventListener('mouseover', () => {
         infoInner.style.cssText = 'top: 70px'
      })
      infoBlock.addEventListener('mouseleave', () => {
         infoInner.style.cssText = 'top: -300px'
      })
   }

   if (authTrigger) {
      authTrigger.addEventListener('mouseover', () => {
         authInner.style.cssText = 'top: 70px'
      })
      authBlock.addEventListener('mouseleave', () => {
         authInner.style.cssText = 'top: -300px'
      })
   }


}

export default header