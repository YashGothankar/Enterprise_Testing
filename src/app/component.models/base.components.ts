import { HttpBackend, HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { Form } from "../models/Form.model";
import { BaseApiGatewayService } from "../services/base-api-gateway-service";


/**
 * This is used for other derived classes to use the common functionalities
 */
@Component({
    template: ''
  })
export class BaseComponent  implements OnInit{

    public module : string = "projectplus";
    public pagename : string = "businessUnits";
    public formData : Form;
   
    public baseApiGatewayService : BaseApiGatewayService;
    public headerToPublish = []

    constructor( public httpClient : HttpClient){

    }

    ngOnInit(): void {
        
    }

    //functions which are common for all pages
    //example could be get

    //this method is used to get the value of gridColumn Headers
    getGridColumns(type:string){
      let url = environment.templateUrl + this.module + "/" + this.pagename + "/" + type;
      console.log(url)
      this.httpClient.get(url).subscribe(data=>{
        this.formData = data as Form;
        console.log(this.formData);
        console.log(this.formData.GridColumns.length);
        for(let i=0; i<this.formData.GridColumns.length; i++){
          if(this.formData.GridColumns[i].ToPublish){
            this.headerToPublish.push(this.formData.GridColumns[i].ColumnName)
          }
        }
        return this.headerToPublish
      })
    }

    getUrl(type:string){
      let url = environment.templateUrl + this.module + "/" + this.pagename + "/" + type;
      return url
    }

    // getGridColumns(){
    //   this.httpClient.get("http://localhost:8080/templates/projectplus/businessUnits/index").subscribe(data=>{
    //     this.formData = data as Form
    //     console.log(this.formData)
    //     console.log(this.formData.GridColumns.length)
    //     for(let i=0; i<this.formData.GridColumns.length;i++){
    //       if(this.formData.GridColumns[i].ToPublish){
    //         this.headerToPublish.push(this.formData.GridColumns[i].ColumnName)
    //       }
    //     }
    //     return this.headerToPublish        
    //   })
    // }
    
}