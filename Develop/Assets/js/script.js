//display current day  in 
var currentDay = $('#currentDay');
var containerEl = $('.container');

// use moment to display current date 
var hourEl = moment().hour();

// display all working hours in an array in hA format to show AM or PM
var workingHours = [
    moment().hour(9).format('hA'),
    moment().hour(10).format('hA'),
    moment().hour(11).format('hA'),
    moment().hour(12).format('hA'),
    moment().hour(1).format('hA'),
    moment().hour(2).format('hA'),
    moment().hour(3).format('hA'),
    moment().hour(4).format('hA'),
    moment().hour(5).format('hA')
];


// add task to scheduler 
var addTask = function(taskText) {
    // create elements that make up a task item 

}

// test test test 

//edit task 
var editTask


// delete task 
var deleteTask 