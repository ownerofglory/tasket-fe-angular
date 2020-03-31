import { Task } from './task.model';

export class Board {
    id: number;
    name: string;
    description: string;
    tasks: Task[];
}
