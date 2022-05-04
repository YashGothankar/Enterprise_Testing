import { CustomKeyValueString } from "./CustomKeyValue.model";
import { Event } from "./Event.model";

export class DataTemplate{
  public ColumnName: string;
  public ColumnType: string;
  public IsDataToBeExtracted: boolean;
  public CssClassName: any;
  public DataType: string;
  public KeyValues: Array<CustomKeyValueString>;
  public Events : Array<Event>
  constructor(){

    this.ColumnName ='';
    this.ColumnType= '';
    this.IsDataToBeExtracted= false;
    this.CssClassName= '';
    this.DataType = '';
    this.KeyValues = [];
    this.Events = [];
  }
}