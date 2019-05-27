export class User {

    static _id = 0;

    public id: number;
    public email: string;
    public first_name: string;
    public last_name: string;
    public avatar: string;

    constructor(id: number,  email: string, first_name: string, last_name: string, avatar: string) {
        this.id = id;
        // this.id = User._id++;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.avatar = avatar;
    }
}
