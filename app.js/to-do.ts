class Task {
  done: boolean;
  description: string;
  priority: string;

  constructor(descriptionParameter: string, priorityParameter: string){
    this.done = false;
    this.description = descriptionParameter;
    this.priority = priorityParameter;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Wash the car', 'high'));
tasks.push(new Task('Walk the dog', 'low'));

console.log(tasks);
