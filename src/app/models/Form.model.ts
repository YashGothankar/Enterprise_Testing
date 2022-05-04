
import { Endpoint } from "./Endpoint.model";
import { GridColumn } from "./Gridcolumn.model";
import { Section } from "./Section.model";
import { Tab } from "./Tab.model";

export class Form {

  Id: number;
  FormName: string;
  Menu: string;
  IsSummaryData: boolean;
  Sections: Array<Section>; // Import Later
  // PopUpUrl: string;
  TenantId: number;
  FormType: number;

  //1-> Index, 2-> Add/edit, 3--> Report, 4--> Taskboard, 5--> Timesheet
  // Tabs: Array<Tab>;
  BaseEntityId: number;
  // ModuleId: number;
  BaseFormId: number;
  GotoBack: boolean;
  GridColumns: Array<GridColumn>; // Import Later
  EndPoint: Endpoint;
  IsFormMsg: boolean;
  FormMsg: string;
  IsHistory?: boolean;
  // IsOperationButton?: boolean;
  IsPaginationEnabled: boolean;

  constructor() {
    this.IsSummaryData = false;
    this.GridColumns = [];
    this.Id = 0;
    this.FormName = '';
    this.Menu = '';
    this.Sections = [];
    this.FormType = 0;
    this.IsFormMsg = true;

    this.FormMsg = '';
    this.BaseFormId = 0;
    this.GotoBack = false;
    this.EndPoint = new Endpoint();
    this.IsPaginationEnabled = true;
  }
}
