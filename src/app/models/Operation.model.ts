
export class Operation{
    public Id:number;
    public OperationMode:string;
    // public OperationEndPoint: Endpoint;
    public OperationalVerb: string;

    constructor(){
        this.Id = 0;
        this.OperationMode = '';
        this.OperationalVerb = ''
    }
}