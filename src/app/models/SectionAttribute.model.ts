import { DependentOption } from "./Dependentoption.model";
import { Endpoint } from "./Endpoint.model";
import { SecondaryEntity } from "./Secondaryentity.model";
import { Validator } from "./Validator.model";

export class SectionAttribute{
    public Id: number;
    public AttributeId:number;
    public RatingValue:number;
    public LabelName:string;
    public ControlName:string;
    public ControlName2?:string;
    public isTypoValue?:boolean;
    public ModelPropName?:string;
    public ControlType:string;
    public CurrentValue:string;
    public ValueType:string;
    public IsHidden?:boolean;
    public IsDisabled?:Boolean;
    public IsNeeded?:Boolean;
    public CssClassName:string;
    public CssHeaderClassName?:string; //s
    public SecondaryEntity?:SecondaryEntity;
    public ModelPropName2?:string; //
    public DependentOption?:DependentOption;
    public Title:string;
    public Validators:Array<Validator>;
    public Events:Array<Event>;
    public EndPoint?:Endpoint;
    public RouteEntry?:string;
    public IncludeIcon?:boolean;
    public IconClass?:string;
    public ModelPropType?:string;
    public IncludeRefresh?:boolean; //s
    public HelpText?:string;//s
    public IncludeAddtionalInfo?:boolean;//
    public ReadFromTag?:boolean;//
    public DefaultValue?:string;//
    public EndPointId?:number;//
    public RowVersion?:any;//

    constructor(){
        
    }

    validateData():boolean{
        let status = true;

        this.Validators.forEach(element => {
            status = element.validate();
            if(status == false){
                return;
            }
        });
        
        return status;
    }
}