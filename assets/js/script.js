var currentDay = $("#currentDay");
var time9am = $("#event-9am")
var time10am = $("#event-10am");
var time11am = $("#event-11am");
var time12pm = $("#event-12pm");
var time1pm = $("#event-1pm");
var time2pm = $("#event-2pm");
var time3pm = $("#event-3pm");
var time4pm = $("#event-4pm");
var time5pm = $("#event-5pm");
var saveBtn = $(".saveBtn");

// Display current day
var date = moment().format("dddd, MMMM Do, YYYY");
currentDay.text(date);

// Change class of time-block by time
function colourCode() {
    var currentTime = moment().format("H");
    
    if (currentTime < 9) {
        time9am.addClass("future");
        time10am.addClass("future");
        time11am.addClass("future");
        time12pm.addClass("future");
        time1pm.addClass("future");
        time2pm.addClass("future");
        time3pm.addClass("future");
        time4pm.addClass("future");
        time5pm.addClass("future");
    }

    else if (currentTime >= 9 && currentTime < 10) {
        time9am.addClass("present");
        time10am.addClass("future");
        time11am.addClass("future");
        time12pm.addClass("future");
        time1pm.addClass("future");
        time2pm.addClass("future");
        time3pm.addClass("future");
        time4pm.addClass("future");
        time5pm.addClass("future");
    }

    else if (currentTime >= 10 && currentTime < 11) {
        time9am.addClass("past");
        time10am.addClass("present");
        time11am.addClass("future");
        time12pm.addClass("future");
        time1pm.addClass("future");
        time2pm.addClass("future");
        time3pm.addClass("future");
        time4pm.addClass("future");
        time5pm.addClass("future");
    }

    else if (currentTime >= 11 && currentTime < 12) {
        time9am.addClass("past");
        time10am.addClass("past");
        time11am.addClass("present");
        time12pm.addClass("future");
        time1pm.addClass("future");
        time2pm.addClass("future");
        time3pm.addClass("future");
        time4pm.addClass("future");
        time5pm.addClass("future");
    }

    else if (currentTime >= 12 && currentTime < 13) {
        time9am.addClass("past");
        time10am.addClass("past");
        time11am.addClass("past");
        time12pm.addClass("present");
        time1pm.addClass("future");
        time2pm.addClass("future");
        time3pm.addClass("future");
        time4pm.addClass("future");
        time5pm.addClass("future");
    }

    else if (currentTime >= 13 && currentTime < 14) {
        time9am.addClass("past");
        time10am.addClass("past");
        time11am.addClass("past");
        time12pm.addClass("past");
        time1pm.addClass("present");
        time2pm.addClass("future");
        time3pm.addClass("future");
        time4pm.addClass("future");
        time5pm.addClass("future");
    }

    else if (currentTime >= 14 && currentTime < 15) {
        time9am.addClass("past");
        time10am.addClass("past");
        time11am.addClass("past");
        time12pm.addClass("past");
        time1pm.addClass("past");
        time2pm.addClass("present");
        time3pm.addClass("future");
        time4pm.addClass("future");
        time5pm.addClass("future");
    }

    else if (currentTime >= 15 && currentTime < 16) {
        time9am.addClass("past");
        time10am.addClass("past");
        time11am.addClass("past");
        time12pm.addClass("past");
        time1pm.addClass("past");
        time2pm.addClass("past");
        time3pm.addClass("present");
        time4pm.addClass("future");
        time5pm.addClass("future");
    }

    else if (currentTime >= 16 && currentTime < 17) {
        time9am.addClass("past");
        time10am.addClass("past");
        time11am.addClass("past");
        time12pm.addClass("past");
        time1pm.addClass("past");
        time2pm.addClass("past");
        time3pm.addClass("past");
        time4pm.addClass("present");
        time5pm.addClass("future");
    }

    else if (currentTime >= 17 && currentTime < 18) {
        time9am.addClass("past");
        time10am.addClass("past");
        time11am.addClass("past");
        time12pm.addClass("past");
        time1pm.addClass("past");
        time2pm.addClass("past");
        time3pm.addClass("past");
        time4pm.addClass("past");
        time5pm.addClass("present");
    }

    else if (currentTime >= 18) {
        time9am.addClass("past");
        time10am.addClass("past");
        time11am.addClass("past");
        time12pm.addClass("past");
        time1pm.addClass("past");
        time2pm.addClass("past");
        time3pm.addClass("past");
        time5pm.addClass("past");
    }
}

colourCode();
