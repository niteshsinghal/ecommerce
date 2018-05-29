import { Component } from "@angular/core";
import * as tableData from "./smart-data-table";
@Component({
  templateUrl: "./smart-table.component.html"
})
export class SmarttableComponent {
  source: any;
  constructor() {}
  settings = tableData.settings;
  settings2 = tableData.settings2;
}
