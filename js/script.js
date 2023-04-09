import main from './modules/main';
import competition from './modules/competition';


window.addEventListener('DOMContentLoaded', () => {
   main();

   if(document.querySelector('.competition__calendar')) {
      competition();
   }
});
