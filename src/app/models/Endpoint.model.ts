export interface Header {  //Not getting used anywhere else
    KeyName: string,
    ValueName: string,

}

//Changed From Class to interface
export interface AdditionalParam {  //Not getting used anywhere else 
    ControlName?: string;
    ModelPropName?: string;
    KeyName?: string;
    ValueName?: string;
    ControlType?: string;
}

export class Endpoint {
    Id: number;
    EndpointAddress: string;
    Protocol: string;
    ReturnType: string;
    Version: string;
    // Headers?: Array<Header>;
    // AdditionalParams?: Array<AdditionalParam>;
    // RelatedParams?: Array<AdditionalParam>;
    // RequestParams?: Array<AdditionalParam>;
    // ModuleName?: string;
    // SortKey?: string;
    // UseCache?: boolean;
    // IsUniqueness?: boolean;
    // delay?: number;

    constructor() {
        this.Id = 0;
        this.EndpointAddress = '';
        this.Protocol = '';
        this.ReturnType = '';
        this.Version = '';
    }
}