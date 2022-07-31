tasks = [];


// load tasks 
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    if(!tasks) {
        tasks = [];
    } ; 
    printTasks(tasks)
}


// print tasks 
var printTasks = function() {
    $.each(tasks, function(list, arr){

        var taskP = $("<p>").addClass("description task-item-" + list).text(arr)

        $("#task-item-" + list).replaceWith(taskP);
    })
}

var Today = (moment().format("MMMM D, YYYY"))
    $("#currentDay").text(Today);