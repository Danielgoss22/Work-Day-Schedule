var saveBtn = $(".saveBtn");
var timeBlock = $(".time-block");
var elementId = timeBlock.attr("id");
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

// I need to make a for loop to iterate through within an if statement to determine which hour of the day we are in.
// // if (hourOfDayId === hour) {
// }

// $(function () {
//   var timeNow = parseInt(dayjs().format("H"));
//   var timeBlock = $(".time-block");
//   timeBlock.each(function (index) {
//     var colorTime = index + 9;
//     if (timeNow === colorTime) {
//       $(this).addClass("present");
//     } else if (timeNow > colorTime) {
//       $(this).addClass("past");
//     } else if (timeNow === colorTime) {
//       $(this).addClass("future");
//     }
//   });
// timeBlock.forEach((element) => {});

// for (var i = 0; i < timeOfDay.length; i++) {
//   var parsedHour = parseInt(timeOfDay.split("-")[1]);
// }
$(function () {
  var timeNow = parseInt(dayjs().format("H"));

  var parsedId = parseInt(elementId.split("-")[1]);
  for (var i = 0; i < parsedId.length; i++) {
    if (timeNow === parsedId) {
      $(this).addClass("present");
    } else if (timeNow > parsedId) {
      $(this).addClass("future");
    } else if (timeNow < parsedId) {
      $(this).addClass("past");
    }
  }
});
saveBtn.on("click", function (event) {
  var userInput = parsedId.JSON.parse.localStorage.getItem(userInput.value);
  var userSave = (event.target = $(this));
});
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input inlocal storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
//
//
//
// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
//
