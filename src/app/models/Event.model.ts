import { Endpoint } from "./Endpoint.model";
import { ParamKeyValueString } from "./ParamKeyValueString.model";
import { ReportInput } from "./ReportInput.model";
import { ReportOutput } from "./ReportOutput.model";

export class Event{
    public EventName : string;
    public affectedControlName: string;
    public affectedControlModelName?: string;
    public affectedControlModelName1?:string;
    public Endpoint? : Endpoint;
    public RouteEntry?: string;
    public Behaviour?:string;
    public ReportInputs?: Array<ReportInput>;
    public ReportOutputColumns?:Array<ReportOutput>;
    public ParentControlId? :any;
    public NavigationForm?: string;
    public ActionType : string;
    public ParamValueReferences?: Array<ParamKeyValueString>;
    public IsLevel3?: boolean;
    public AdditionalInfo?: boolean;
    public IsSequential?: boolean;
    public DataNotFoundEvents?: Array<Event>

    constructor(){
        this.EventName = '';
        this.affectedControlName = '';
        this.affectedControlModelName = '';
        this.affectedControlModelName1 = '';
        this.Endpoint = new Endpoint();
        this.RouteEntry = '';
        this.Behaviour = '';
        this.ReportInputs = [];
        this.ReportOutputColumns = [];
        this.ParentControlId = 0;
        this.NavigationForm = '';
        this.ActionType= '';
        this.ActionType = '';
        this.ParamValueReferences = [];
        this.IsLevel3 = false;
        this.AdditionalInfo = true;
        this.IsSequential = true;
        this.DataNotFoundEvents = []
    }

}