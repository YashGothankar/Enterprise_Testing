import { HttpClient } from "@angular/common/http";
import { identifierName } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { of } from "rxjs";
import { environment } from "src/environments/environment";
import { BusinessUnits } from "../atpl-api-common-master/businessUnit";
import { DtoBase } from "../atpl-api-common-master/DtoBase";
import { Page } from "../atpl-api-common-master/page";
import { ResponseModel } from "../atpl-api-common-master/ResponseModel";
import { Form } from "../models/Form.model";
import { GridColumn } from "../models/Gridcolumn.model";
import { BaseComponent } from "./base.components";


/**
 * This is used for other derived classes to use the common functionalities
 */
@Component({
    template: ''
  })
export class ListingBaseComponent extends BaseComponent implements OnInit{

    responseData : ResponseModel<BusinessUnits> 
    records = []
    obj = {}

    constructor(public httpClient : HttpClient){
      super(httpClient);
    }

    ngOnInit(): void {
        
    }

  /**
   * This is used for sorting the fields on listing page. 
  */
  sort(){

    }

  /**
   * This is used for searching/filtering the list. 
   */
  filterData(){

  }

  /**
   * Fetch Next Page data.
   */
  nextPage(){

  }

  /**
   * Fetch Previous Page data.
   */
  prevPage(){
    
  }

  /**
   * Fetch First Page data.
   */
  firstPage(){


  }

  /**
   * Fetch Last Page data.
   */

  lastPage(){

  }
  /**
   * Fetch Headers for the Table
   */
  populateJsonData(){
    let data = this.getGridColumns("index")
    return data
  }

  populateGridData(){
    let url = this.getUrl("index")
    this.httpClient.get(url).subscribe(data=>{
      this.formData = data as Form
      let fqData = [];
      for(let i =0;i<this.formData.GridColumns.length;i++){
        fqData.push(this.formData.GridColumns[i].FQModelName)
      }
      console.log(this.formData)
      let url_to_call = environment.projectPlusBaseUrl + '/' + this.formData.EndPoint.EndpointAddress + '/' + 10 + '/' + 1
      console.log(url_to_call)
      this.httpClient.get(url_to_call).subscribe(response=>{
        if(response!=null){
          this.responseData = response as ResponseModel<BusinessUnits>
          console.log(this.responseData)
          this.responseData.DataCollection.forEach(element=>{
            console.log(element)
            let keys = []
            keys = Object.keys(element)
            let values = Object.values(element)
            let newFqData = fqData
            for(let i = 0; i<this.responseData.DataCollection.length;i++){
              if(newFqData[i] === this.formData.GridColumns[i].ColumnName){
                let value_temp = values[i]
                console.log(value_temp)
                this.records.push(value_temp)
              }
            }            
          })
        }
      })
    })
    return this.records
  }

  populateGridDatas(){
    let url = this.getUrl("index")
    this.httpClient.get(url).subscribe(data=>{
      this.formData = data as Form
      let fqData = [];
      for(let i =0;i<this.formData.GridColumns.length;i++){
        fqData.push(this.formData.GridColumns[i].FQModelName)
      }
      console.log(this.formData)
      console.log(fqData)
      let url_to_call = environment.projectPlusBaseUrl + '/' + this.formData.EndPoint.EndpointAddress + '/' + 10 + '/' + 1
      console.log(url_to_call)
      this.httpClient.get(url_to_call).subscribe(response=>{
        if(response!=null){
          this.responseData = response as ResponseModel<BusinessUnits>
          this.responseData.DataCollection.forEach(element=>{
            console.log(element)
            let keys = []
            let values = []
            values = Object.values(element)
            console.log(values)
            keys = Object.keys(element)
            for(const value of values){
              this.records.push(value)
              console.log(this.records)
            }
          })          
        }
      })
    })
    return this.records
  }
}