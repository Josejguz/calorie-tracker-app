import Chart from 'chart.js/auto';


const breakfastEntries = document.getElementById('breakfast-entries');
const lunchEntries = document.getElementById('lunch-entries');
const dinnerEntries = document.getElementById('dinner-entries');
const snackEntries = document.getElementById('snack-entries');

const addBreakfastEntry = document.getElementById('add-breakfast');
const addLunchEntry = document.getElementById('add-lunch');
const addDinnerEntry = document.getElementById('add-dinner');
const addSnackEntry = document.getElementById('add-snack');

/*
addBreakfastEntry.addEventListener('click', () => {
    breakfastEntries.innerHTML += `
        <div class="entry">
            <input type="text" placeholder="Food" />
            <input type="number" placeholder="Calories" />
        </div>
    `;
});
*/



(async function() {
    const data = {
        labels: [
          'Calories',
          'Exercise',
        ],
        datasets: [{
          label: 'Daily Calorie Intake',
          data: [300, 50],
          backgroundColor: [
            'rgb(75, 219, 101)',
            'rgb(64, 137, 220)'
          ],
          hoverOffset: 4
        }]
      };

    new Chart(
      document.getElementById('calorie-chart'),
      {
        type: 'doughnut',
        data: data,
        options: {
            cutout: '80%',
        }
      }
    ).resize(272, 272);
  })()
