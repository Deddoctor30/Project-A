const competition = () => {
   const tableBody = document.querySelector('.calendar__body');
   const monthName = document.querySelector('.calendar__month');
   const yearName = document.querySelector('.calendar__year');
   const arrPrev = document.querySelector('#prevArr');
   const arrNext = document.querySelector('#nextArr');

   let date = new Date();
   let year = date.getFullYear()
   let month = date.getMonth()

   const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
   monthName.textContent = `${monthNames[month]} `;
   yearName.textContent = year;

   const colorChanger = () => {
      const newData = document.querySelectorAll('td');
      const switcher = document.querySelector('.switcher__input');
      if (switcher.hasAttribute('checked')) {
         newData.forEach(item => {
            item.classList.add(`mainMonthDark`)
         })
      } else {
         newData.forEach(item => {
            item.classList.add(`mainMonth`)
         })
      }
   }

   const arrowNext = () => {
      arrNext.addEventListener('click', () => {
         const tableRow = document.querySelectorAll('.tableRow')
         tableRow.forEach(i => i.remove())
         if (month > 10) {
            year++;
            month = 0;
            yearName.textContent = year;
            monthName.textContent = `${monthNames[month]} `;
         } else {
            month++;
            monthName.textContent = `${monthNames[month]} `;
         }
         createNet(year, month)
         colorChanger();
      })
   }

   arrowNext()

   const arrowPrev = () => {
      arrPrev.addEventListener('click', () => {
         const tableRow = document.querySelectorAll('.tableRow')
         tableRow.forEach(i => i.remove())
         if (month < 1) {
            year--;
            month = 11;
            yearName.textContent = year;
            monthName.textContent = `${monthNames[month]} `;
         } else {
            month--;
            monthName.textContent = `${monthNames[month]} `;
         }
         createNet(year, month)
         colorChanger();
      })
   }

   arrowPrev()

   const createNet = (year, month) => {
      let a = 0;
      for(let i = 0; i < 6; i++) {
         const newRow = document.createElement('tr')
         newRow.classList.add(`tableRow-${i}`)
         newRow.classList.add(`tableRow`)
         tableBody.append(newRow)

         // Первая строка
         if (i === 0) {
            for(let g = 0; g < 7; g++) {
               const newData = document.createElement('td')
               newData.classList.add(`tableData-${i}-${g}`);
               newData.classList.add(`tableData`);
               newRow.append(newData)
               // Логика
               const b = new Date(`${year}-${month + 1}-1`)
               const dayOfWeek = b.getDay();
               b.setDate(b.getDate() - (dayOfWeek !== 0 ? dayOfWeek - 1 : 6) + g);
               newData.textContent = b.getDate();            
               b.getMonth() === month ? newData.classList.add(`mainMonth`) : null;
               if (g === 6) {
                  a = document.querySelector(`.tableData-${i}-6`).innerHTML
               }
            }
         } else {
            // Отсальные строки
            for(let j = 0; j < 7; j++) {
               const newData = document.createElement('td')
               newData.classList.add(`tableData-${i}-${j}`)
               newData.classList.add(`tableData`)
               newRow.append(newData)
               // Логика
               const b = new Date(`${year}-${month + 1}-${+a + 1}`)
               b.setDate(b.getDate() + j);

               newData.textContent = isNaN(b.getDate()) === false ? b.getDate() : '-';

               b.getMonth() === month ? newData.classList.add(`mainMonth`) : null;
               const monthOff = document.querySelector(`.tableData-${i - 1}-6`);
               if (monthOff && !monthOff.classList.contains('mainMonth')) {
                  newData.classList.add(`notMainMonth`);
               }
               if (j === 6) {
                  a = document.querySelector(`.tableData-${i}-6`).innerHTML
               }
            }
         }
      }
   }
   createNet(year, month)



   colorChanger()
}

export default competition