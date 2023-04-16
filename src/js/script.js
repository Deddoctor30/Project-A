import main from './modules/main';
import competition from './modules/competition';
import bgSwitcher from './modules/bgSwitcher';


window.addEventListener('DOMContentLoaded', () => {
   main();
   bgSwitcher();
   if(document.querySelector('.competition__calendar')) {
      competition();
   }

});
