
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

const currentDay = today;
console.log(currentDay)

// ------------------------------
// Get HTML elements:
const dateElement= document.getElementsByClassName('grid-item');
// console.log('collection:', dateElement);

// Loop thru the HTML collection and match the 'data-date'
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



// const specifiedDate = dateElement[2].dataset.date;

// en for loop på arrayen?

// console.log(specifiedDate)





// console.log('Im here')

/*

jquery som funkar:

$(function () {
  var date = new Date(),
    currentDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  $(".grid-item").each(function () {
    var specifiedDate = $(this).data("date");

    if (specifiedDate == currentDate) {
      $(this).addClass("today");
    } else if (currentDate > specifiedDate) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  });
});

*/