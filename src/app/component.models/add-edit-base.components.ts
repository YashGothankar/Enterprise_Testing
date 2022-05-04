import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "./base.components";


/**
 * This is used for other derived classes to use the common functionalities
 */
@Component({
  template: ''
})
export class AddEditBaseComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {

  }
}