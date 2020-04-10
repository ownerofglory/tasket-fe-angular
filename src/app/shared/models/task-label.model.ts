export class TaskLabel {
    // id: number;
    name: string;
    status: TaskLabelStatus;
}

export enum TaskLabelStatus {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
    SUCCESS = 'SUCCESS',
    DANGER = 'DANGER',
    WARNING = 'WARNING',
    INFO = 'INFO',
    LIGHT = 'LIGHT',
    DARK = 'DARK'
}
