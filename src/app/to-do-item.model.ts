export class ToDoItem {
    static _id = 0;

    public id: number;
    public title: string;
    public done: boolean;

    constructor(title: string) {
        this.title = title;
        this.id = ToDoItem._id;

    }
}