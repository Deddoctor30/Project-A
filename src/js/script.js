import main from './modules/main';
import competition from './modules/competition';
import bgSwitcher from './modules/bgSwitcher';
import header from './modules/header';


window.addEventListener('DOMContentLoaded', () => {
   main();
   bgSwitcher();
   header();
   if(document.querySelector('.competition__calendar')) {
      competition();
   }

});
