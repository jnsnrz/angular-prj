export class User {
    public id: number;
    public name: string;
    public imgPath: string;

    // sallary: any;
    // age: number;
    // image: string;

    constructor(id: number, name: string, imgPath: string) { 
        this.id = id;
        this.name = name;
        this.imgPath = imgPath;
    }
}