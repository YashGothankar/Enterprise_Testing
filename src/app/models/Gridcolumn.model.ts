import { SectionAttribute } from "./SectionAttribute.model";


/** This class defines Each header properties that needs to be displayed on the grid */
export class GridColumn {

    /** ColumnName that needs to be the header*/
    ColumnName: string;    //


    FQModelName: string;   //Example Address.StreetAddress  (in normal case this will be same as ColumnName, but for associative entity it will Address.StreetAddress)
    ToPublish: boolean;
    IsSortable: boolean;   //By Default every column is sortable, if to be made nont sortable, please assign false to it.
    FQSortableField: string;

    
    ColumnType: string;
    ColumnHeader: string;
    Alignment: string; //Options --> 'Left', 'Right', 'Center'
    InputKeyColumnName: string;
    InputValueFieldId:string;
    IsEditable:boolean;
    IsDelete:boolean;
    SectionAttribute: SectionAttribute; //Will import from karan's branch 
    //new properties

    constructor(){
        
        this.ColumnName = '';
        this.SectionAttribute = new SectionAttribute();
        this.Alignment = 'Left';
        this.IsSortable = true;
        this.FQModelName = '';
        this.ToPublish = true;
        this.FQSortableField= '';
        this.ColumnType = '';
        this.ColumnHeader = '';
        this.InputKeyColumnName = '';
        this.InputValueFieldId = '';
        this.IsEditable = false;
        this.IsDelete = false;
        this.SectionAttribute = new SectionAttribute();


    }
}