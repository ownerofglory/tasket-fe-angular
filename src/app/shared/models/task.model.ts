import { TaskPriority } from './task-priority.enum';
import { TaskLabel } from './task-label.model';
import { User } from './user.model';

export class Task {
    id: number;
    title: string;
    description: string;
    priority: TaskPriority;
    labels: TaskLabel[];
    attendees: User[];
    taskListId: number;

    // copy(): Task {
    //     const task = new Task;
    //     task.description = this.description;
    //     task.id = this.id;
    //     return task;
    // }
}
