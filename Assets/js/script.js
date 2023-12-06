var saveBtn = $(".saveBtn");
var timeBlock = $(".time-block");
var elementId = timeBlock.attr("id");
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

function hourColor() {
  var timeNow = parseInt(dayjs().format("H"));

  $(".time-block").each(function () {
    var parsedId = parseInt($(this).attr("id").split("-")[1]);

    if (parsedId === timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    } else if (parsedId > timeNow) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
}
saveBtn.on("click", function () {
  var time = $(this).parent().attr("id");
  var userInput = $(this).siblings(".description").val();
  console.log(time, userInput);
  localStorage.setItem(time, userInput);
});
hourColor();

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
