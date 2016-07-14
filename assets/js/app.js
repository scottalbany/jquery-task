/*global $*/
// Load Tasks from JSON
function loadTasks(tasks) {
    'use strict';
    $.each(tasks, function(i, task) {
        $(".appData").append(
            "<div class='list'><span class='name'>" + task.name +
            "</span> <span class='date'>" + task.date +
            "</span> <span class='assigned'>" + task.assigned +
            "</span> </div>"
        );
    });
}

// Add Tasks to List
$('#addTask').click(function(event) {
    'use strict';
    event.preventDefault();
    // Check for Validity
    var taskName = $('#taskName').val(),
        taskDate = $('#taskDate').val(),
        taskAssigned = $('#taskAssigned').val(),
        isValid = true;
    
    // Error if Not Valid
    $('input[type="text"]').each(function() {
        if ($.trim($(this).val()) === '') {
            isValid = false;
            $(this).css({
                "border": "1px solid red",
                "background": "#FFCECE"
            });
        } else {
            $(this).css({
                "border": "",
                "background": ""
            });
        }
    });
    
    // Prepend Values
    if (isValid === true) {
        $(".appData").prepend(
            "<div class='list'><span class='name'>" + taskName +
            "</span> <span class='date'>" + taskDate +
            "</span> <span class='assigned'>" + taskAssigned +
            "</span> </div>"
        );
    }
});


