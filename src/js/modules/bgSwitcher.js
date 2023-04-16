
const bgSwitcher = () => {
   // const wrapper = document.querySelector('.wrapper');
   const switcher = document.querySelector('.switcher__input');
   const body = document.querySelector('body');
   const header = document.querySelector('.header__line');
   const footer = document.querySelector('.footer');


   switcher.addEventListener('click', () => {
      switcher.toggleAttribute('checked')

      if (switcher.hasAttribute('checked')) {
         body.style.setProperty('--bg-color', '#171717')
         body.style.setProperty('--text-color', 'white')
         header.style.setProperty('--header-line-color', '#171717')
         footer.style.setProperty('--header-line-color', '#171717')
         switcher.style.cssText = 'color: white';
         if (document.querySelector('.mainMonth')) {
            document.querySelectorAll('.mainMonth').forEach(item => {
               item.style.cssText = 'color: white'
            })
         }
      } else {
         body.style.setProperty('--bg-color', 'white')
         body.style.setProperty('--text-color', 'black')
         header.style.setProperty('--header-line-color', '#1D84B5')
         footer.style.setProperty('--header-line-color', '#1D84B5')
      }
      
   })
  
}

export default bgSwitcher;
