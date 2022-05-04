export  class ReportInput{
    public ControlName: string;
    public ControlType:String;
    public ModelName?:string;

    constructor(){
        this.ControlName = '';
        this.ControlType = '';
        this.ModelName = ''
    }
}