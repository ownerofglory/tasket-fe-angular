import { Task } from './task.model';
import { Space } from './space.model';

export class List {
    id: number;
    name: string;
    description: string;
    spaceId: number;
    tasks: Task[];
    space: Space;
}
