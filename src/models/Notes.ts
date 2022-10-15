import { v4 as idNotes } from "uuid";

export class Notes {

    private _id: string;

    constructor(
        private _title: string,
        private _description: string
    ){
        this._id = idNotes();
    }

    public get idNotes() {
        return this._id;
    }

    public get title() {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get description() {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public getNotes() {
        return {
            id: this._id,
            title: this._title,
            description: this._description
        }
    }

}