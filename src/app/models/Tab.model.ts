import { Endpoint } from "./Endpoint.model";

export class Tab {
    public Id: number;
    public AttributeId: number;
    public TabName: string;
    public ControlType: string;
    public EndPoint?: Endpoint;
    public Events: Array<Event>;
    public CssClassName: any;

    constructor() {

        this.Id = 0;
        this.AttributeId = 0;
        this.TabName = '';
        this.ControlType='';
        this.EndPoint = new Endpoint();
        this.Events = [];
        this.CssClassName = '';


    }
}