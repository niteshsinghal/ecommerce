import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { TablesRoutes } from "./tables.routing";
import { DatatableComponent } from "./data-table/data-table.component";
import { BasicComponent } from "./basic/basic.component";
import { SmarttableComponent } from "./smart-table/smart-table.component";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(TablesRoutes)],
  declarations: [DatatableComponent, BasicComponent, SmarttableComponent]
})
export class TablesModule {}
