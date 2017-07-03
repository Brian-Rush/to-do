var Task = (function () {
    function Task(descriptionParameter, priorityParameter) {
        this.done = false;
        this.description = descriptionParameter;
        this.priority = priorityParameter;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var tasks = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Wash the car', 'high'));
tasks.push(new Task('Walk the dog', 'low'));
tasks[0].markDone();
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(task);
}
