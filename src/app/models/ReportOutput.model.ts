export class ReportOutput{
    public ControlName:string;
    public ControlType: string;
    public ModelName?: string;

    constructor(){
        this.ControlName = '';
        this.ControlType = '';
        this.ModelName = '';
    }
}