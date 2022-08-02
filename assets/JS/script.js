//save button function
$(".saveBtn").on("click", function () {
    var dataIndex = $(this).data('index');
    notes[dataIndex] = $(classes[dataINdex]).val();
    localStorage.setItem('notes', JSON.stringify(notes))
    alert("Saved")

})

//get data 
function getData() {
    notes = JSON.parse(localStorage.getItem("notes"));
    if (notes == null) {
        notes = ["", "", "", "", "", "", "", "", "", "", ""];
        return;
    }
    for (i = 0; i < classes.length; i++) {
        ($(classes[i])).val(notes[i]);
    }
}

//click event for the clear button
$(".clear").on("click", function () {
    clearData()
})

//clear data function
function clearData() {
    var confirmDelete = confirm("Are you sure you want to clear all data?");
    if (confirmDelete == true) {
        notes = ["", "", "", "", "", "", "", "", "", "", ""];
        localStorage.setItem('notes', JSON.stringify(notes));
        getData();
    }
}

//save all button function
$(".save").on("click", function () {
    for (i = 0; i < classes.length; i++) {
        notes[i] = $(classes[i]).val();
    }
    localStorage.setItem('notes', JSON.stringify(notes))
    alert("Saved")
})