import { TaskPriority } from './task-priority.enum';

export class Task {
    id: number;
    description: string;
    priority: TaskPriority;

    // copy(): Task {
    //     const task = new Task;
    //     task.description = this.description;
    //     task.id = this.id;
    //     return task;
    // }
}
