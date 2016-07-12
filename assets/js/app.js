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

// Append Tasks to List
$('#addTask').click(function(event) {
    'use strict';
    event.preventDefault();
    var taskName = $('#taskName').val(),
        taskDate = $('#taskDate').val(),
        taskAssigned = $('#taskAssigned').val();
    $(".appData").prepend(
        "<div class='list'><span class='name'>" + taskName +
        "</span> <span class='date'>" + taskDate +
        "</span> <span class='assigned'>" + taskAssigned +
        "</span> </div>"
    );

});