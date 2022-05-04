export class Condition{
    public FieldName: string;
    public FieldValue:any;
    public OperatorSymbol:number;
    public ConditionalSymbol:number;

    constructor(){
        this.FieldName = '';
        this.FieldValue = '';
        this.OperatorSymbol = 0;
        this.ConditionalSymbol = 0;
    }
}