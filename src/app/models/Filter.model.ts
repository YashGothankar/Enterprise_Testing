import { Condition } from "./Condition.model";

export class Filter{
    public Conditions: Array<Condition>;
    public OrderByField:string;
    public IsOrderByFieldAsc:boolean

    constructor(){
        this.Conditions = [];
        this.OrderByField = "Id";
        this.IsOrderByFieldAsc = false
    }
}