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

    // Creating pop-up message to user to say message has been saved
    //Creating html element
    var popUp = $('body').append(`<div>
    <p>Task added to localStorage</p>
    </div>`).addClass('.time-block');
    
    //Adding ccs time-block class
    // $(popUp).addClass('.time-block');

    //Add setTimeout function to make pop-up message appear for only a few secs
    // Need to add show class as well


})

$('textarea').each(function () {
    var key = $(this).siblings('.hour').text();
    $(this).val(localStorage.getItem(key));

})

//if time is in the past, rows should be grey
//if current time, row should be red
//if time is in the future, rows should be green



//user should be able to input their text as multiple lines in text area when they click on it



//user should be able to press the save button to save their task for a specic hour
//this will need to be saved into local storage
//data should remain saved even after refreshing/closing browser
//a pop up should be displayed saying their task has been added to localStorage
