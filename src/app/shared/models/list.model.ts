import { Task } from './task.model';

export class List {
    id: number;
    name: string;
    description: string;
    tasks: Task[];
}
