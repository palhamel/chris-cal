// Create todays date in right format:
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

const currentDay = today;
console.log('todays date is >>>> ', currentDay)

// Get HTML elements by  Class as a HTML Collection / "array":
const dateElement= document.getElementsByClassName('grid-item');
// console.log('collection:', dateElement);

// Loop thru the HTML collection and match the 'data-date' in dataset:
// + Add new Class to matched
for (let item of dateElement) {
console.log('date:', item.dataset.date);
  if (item.dataset.date == currentDay) {
    item.classList.add("today")
  } else if (item.dataset.date > currentDay) {
    item.classList.add("future")
  } else {
    item.classList.add("past")
  }
}
