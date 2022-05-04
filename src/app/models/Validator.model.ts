
export abstract class Validator {


    constructor(){
        
    }

    abstract validate():boolean;

}


export class ServerValidations extends Validator  {
    //Not getting used Anywhere else
    TagToReplace: string;
    ValueTakenFrom: string;

    constructor(){
        super();
    }
  
    validate(): boolean {
        throw new Error("Method not implemented.");
    }
}

export class DateValidator extends Validator {  //Not getting used Anywhere else
    affectedControl?: string;
    isGlobalyAffectedControl?: boolean;
    rule?: string;
    msg?: string;

    constructor(){
        super();
    }

    override validate(): boolean {
        //your specific codoe for validating dates
        return false;
    }
}


export class DateRangeValidator extends Validator {  //Not getting used Anywhere else
    affectedControl?: string;
    isGlobalyAffectedControl?: boolean;
    rule?: string;
    msg?: string;

    constructor(){
        super();
    }

    public control: HTMLInputElement;
    public secondaryControl: HTMLInputElement;

//private control?: HTMLInputElement, private secondaryControl?: HTMLInputElement 
    override validate(): boolean {
        //your specific codoe for validating dates
        //do the null check

        //check if date of second is not less than the first control

        return false;
    }
}

export class NumericValidator extends Validator {  //Not getting used Anywhere else
    affectedControl?: string;
    isGlobalyAffectedControl?: boolean;
    rule?: string;
    msg?: string;

   // control: HTMLElement;

    constructor(private control?: HTMLInputElement ){
        super();

    }

    // constructor(){
    //     super();
    // }

    override validate(): boolean {
        //your specific codoe for validating dates

        //check the nuermic values for this 
        let result = Number(this.control.value);
        //this.secondaryControl;
        return result!=null;
    }
}