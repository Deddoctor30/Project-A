import slider from './modules/slider';
import competition from './modules/competition';
import bgSwitcher from './modules/bgSwitcher';
import header from './modules/header';
import scrollBtn from './modules/scrollBtn';
import popup from './modules/popup';
import burger from './modules/burger';


window.addEventListener('DOMContentLoaded', () => {
   slider();
   bgSwitcher();
   header();
   if(document.querySelector('.competition__calendar')) {
      competition();
   }
   scrollBtn();
   popup();
   burger();
});
