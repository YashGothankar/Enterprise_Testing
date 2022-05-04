

export class Menu {
 public Id: number;
 public Text: string;
 public RouterPath?: string;
 public Icon: string;
 public ApiName?: string;
 public ImagePath?: string;
 public Value?: string;
 public CanActivate?: boolean;
 public ComponentType: string;
 public Children?: Array<Menu>;
 public  ToDelete?: boolean;
  }