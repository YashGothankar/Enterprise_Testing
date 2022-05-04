import { Filter } from "./Filter.model";

export class RequestModel{
    public Filter : Filter;
    public Children : Array<any>

    constructor(){
        this.Filter = new Filter();
        this.Children = []
    }
}