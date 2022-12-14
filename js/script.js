//Displaying the current day of the year at the top in the jumbotron
var currentDay = $('#currentDay');

currentDayString = moment().format('dddd, MMMM Do');
currentDay.text(currentDayString);

console.log(currentDay);


//Working hours (9am-5pm) to be diplayed in rows
var currentHour = moment().hour();

//Creating function to use moment.js to display each hour in a 12hr AM/PM format
function formatHour(hour) {
    return moment().hour(hour).format('h A');
}

//Running a for loop to create a row for each working hour
for (var hour = 9; hour <= 17; hour++) {

    //If statement created to determine colour of each row, depending if the time is in the past, present or future
    //If time is in the past = grey, present = red, future = green
    if (hour < currentHour) {
        $('.container').append(`<div class="row time-block">
    <div class="col-2 hour pt-3">${formatHour(hour)}</div>
    <textarea class="col past"></textarea>
    <button class="saveBtn col-2">
    <i class="fas fa-save"></i>
    </button>
    </div> `)

    } else if (hour > currentHour) {
        $('.container').append(`<div class="row time-block">
    <div class="col-2 hour pt-3">${formatHour(hour)}</div>
    <textarea class="col future"></textarea>
    <button class="saveBtn col-2">
    <i class="fas fa-save"></i>
    </button>
    </div> `)
    } else {
        $('.container').append(`<div class="row time-block">
    <div class="col-2 hour pt-3">${formatHour(hour)}</div>
    <textarea class="col present"></textarea>
    <button class="saveBtn col-2">
    <i class="fas fa-save"></i>
    </button>
    </div> `)
    }
}

//Adding an event listener with JQuery to save the text entered in the textarea
$('.saveBtn').on('click', function () {
    console.log($(this).siblings('.hour').text());

    var key = $(this).siblings('.hour').text();
    var value = $(this).siblings('textarea').val();

    console.log(value);

    localStorage.setItem(key, value);

    window.alert('Your task has been added to localStorage!');
})

// Making sure the text added by the user is saved in the textarea
$('textarea').each(function () {
    var key = $(this).siblings('.hour').text();
    $(this).val(localStorage.getItem(key));

})

