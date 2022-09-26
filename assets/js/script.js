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
var eventInput = $(".event");
var saveBtn = $(".saveBtn");
var clearBtn = $("#clearBtn");

var events = [];

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

// Write function to save input text to local storage

saveBtn.on("click", function (event) {
    event.preventDefault();

    var eventItem9 = $('input[name="eventItem9"]').val().trim()
    if (eventItem9 !== "") {

        localStorage.setItem("eventItem9", JSON.stringify(eventItem9));
    }

    var eventItem10 = $('input[name="eventItem10"]').val().trim()
    if (eventItem10 !== "") {

        localStorage.setItem("eventItem10", JSON.stringif(eventItem10));
    }

    var eventItem11 = $('input[name="eventItem11"]').val().trim()
    if (eventItem11 !== "") {

        localStorage.setItem("eventItem11", JSON.stringify(eventItem11));
    }

    var eventItem12 = $('input[name="eventItem12"]').val().trim()
    if (eventItem12 !== "") {

        localStorage.setItem("eventItem12", JSON.stringify(eventItem12));
    }

    var eventItem13 = $('input[name="eventItem13"]').val().trim()
    if (eventItem13 !== "") {

        localStorage.setItem("eventItem13", JSON.stringify(eventItem13));
    }

    var eventItem14 = $('input[name="eventItem14"]').val().trim()
    if (eventItem14 !== "") {

        localStorage.setItem("eventItem14", JSON.stringify(eventItem14));
    }

    var eventItem15 = $('input[name="eventItem15"]').val().trim()
    if (eventItem15 !== "") {

        localStorage.setItem("eventItem15", JSON.stringify(eventItem15));
    }

    var eventItem16 = $('input[name="eventItem16"]').val().trim()
    if (eventItem16 !== "") {

        localStorage.setItem("eventItem16", JSON.stringify(eventItem16));
    }

    var eventItem17 = $('input[name="eventItem17"]').val().trim()
    if (eventItem17 !== "") {

        localStorage.setItem("eventItem17", JSON.stringify(eventItem17));
    }


    // Test functionality by logging to console
    console.log(eventItem9);

    renderEvents();

});

// Create function to render events to time-blocks
function renderEvents() {
    var event9am = JSON.parse(localStorage.getItem("eventItem9"));
    if (event9am !== null) {

        time9am.val(event9am);
    }

    var event10am = JSON.parse(localStorage.getItem("eventItem10"));
    if (event10am !== null) {

        time10am.val(event10am);
    }

    var event11am = JSON.parse(localStorage.getItem("eventItem11"));
    if (event11am !== null) {

        time11am.val(event11am);
    }

    var event12pm = JSON.parse(localStorage.getItem("eventItem12"));
    if (event12pm !== null) {

        time12pm.val(event12pm);
    }

    var event1pm = JSON.parse(localStorage.getItem("eventItem13"));
    if (event1pm !== null) {

        time1pm.val(event1pm);
    }

    var event2pm = JSON.parse(localStorage.getItem("eventItem14"));
    if (event2pm !== null) {

        time2pm.val(event2pm);
    }

    var event3pm = JSON.parse(localStorage.getItem("eventItem15"));
    if (event3pm !== null) {

        time3pm.val(event3pm);
    }

    var event4pm = JSON.parse(localStorage.getItem("eventItem16"));
    if (event4pm !== null) {

        time4pm.val(event4pm);
    }

    var event5pm = JSON.parse(localStorage.getItem("eventItem17"));
    if (event5pm !== null) {

        time5pm.val(event5pm);
    }

    // Test retrieval
    console.log(event9am + " is got");

}

// Call functions on load
colourCode();
renderEvents();
