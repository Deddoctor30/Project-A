
const bgSwitcher = () => {
   const switcher = document.querySelector('.switcher__input');
   const body = document.querySelector('body');
   const header = document.querySelector('.header__line');
   const footer = document.querySelector('.footer');
   const info = document.querySelector('.info__inner');
   const burgerBg = document.querySelector('.burger__content');

   
   switcher.addEventListener('click', () => {
      if (localStorage.getItem('bg') === 'changed') {
         localStorage.removeItem('bg');
      } else {
         localStorage.setItem('bg', 'changed');
      }

      themeChanger();
   })

   function themeChanger () {
      if (localStorage.getItem('bg') === 'changed') {
         body.style.setProperty('--bg-color', '#171717')
         body.style.setProperty('--text-color', 'white')
         header.style.setProperty('--header-line-color', '#171717')
         footer.style.setProperty('--header-line-color', '#171717')
         info.style.setProperty('--header-line-color', 'black');
         burgerBg.style.setProperty('--header-line-color', 'black');
         if (document.querySelector('.mainMonth')) {
            document.querySelectorAll('.mainMonth').forEach(item => {
               item.style.cssText = 'color: white'
            })
         }
         switcher.setAttribute('checked', true)
      } else {
         body.style.setProperty('--bg-color', 'white')
         body.style.setProperty('--text-color', 'black')
         header.style.setProperty('--header-line-color', '#1D84B5')
         footer.style.setProperty('--header-line-color', '#1D84B5')
         info.style.setProperty('--header-line-color', '#1D84B5');
         burgerBg.style.setProperty('--header-line-color', '#1D84B5');
         switcher.removeAttribute('checked')
         if (document.querySelector('.mainMonth')) {
            document.querySelectorAll('.mainMonth').forEach(item => {
               item.style.cssText = 'color: black'
            })
         }
      }
   }

   themeChanger();
  
}

export default bgSwitcher;
