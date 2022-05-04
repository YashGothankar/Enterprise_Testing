import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class BaseApiGatewayService{
    private hostUrl : string = "http://localhost:8080/templates/";

    constructor(public httpClient : HttpClient){}

    getJsonDataForIndex(moduleName: string, pageName:string):Observable<any>{
        let url =  this.httpClient.get(this.hostUrl + moduleName + "/" + pageName + "/" + "index")
        console.log(url)
        return url
        //http://localhost:8080/templates/projectplus/businessUnits/index
    }
}