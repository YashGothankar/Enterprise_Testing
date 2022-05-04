import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListingBaseComponent } from 'src/app/component.models/listing-base.components';

@Component({
  selector: 'app-dynamic-index-component',
  templateUrl: './dynamic-index-component.component.html',
  styleUrls: ['./dynamic-index-component.component.css']
})
export class DynamicIndexComponentComponent extends ListingBaseComponent implements OnInit {
  
  constructor(public httpClient : HttpClient) { 
    super(httpClient)
  }

  ngOnInit(): void {
    this.populateJsonData()
    // this.populateGridData()
    this.populateGridDatas()
  }

}
