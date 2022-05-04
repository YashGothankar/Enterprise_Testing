import { DtoBase } from "./DtoBase";

export class BusinessUnits extends DtoBase{
    BUCode:string;
    BUName:string;
    Description:string

    constructor(){
        super()
        this.BUCode = '';
        this.BUName = '';
        this.Description = ''
    }
}