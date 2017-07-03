class Task {
  done: boolean;
  description: string;
  priority: string;

  constructor(descriptionParameter: string, priorityParameter: string){
    this.done = false;
    this.description = descriptionParameter;
    this.priority = priorityParameter;
  }

  markDone(){
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Wash the car', 'high'));
tasks.push(new Task('Walk the dog', 'low'));
tasks[0].markDone();
for(var task of tasks){
  console.log(task);
}