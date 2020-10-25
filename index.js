
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);
today = yyyy + '-' + mm + '-' + dd;
const currentDay = today;
console.log(currentDay)

// ------------------------------

const dateElement= document.getElementsByClassName('grid-item');
// const dateElement = document.getElementById('lucka')
console.log(dateElement);

for (let item of dateElement) {
  console.log(item.dataset.date);
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