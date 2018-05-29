import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { TableModule } from "ngx-easy-table";
import { CategoryComponent } from "./category/category.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AgGridModule } from "ag-grid-angular";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "category",
        component: CategoryComponent
      }
      // 	, {
      //   path: 'login',
      //   component: LoginComponent
      // }, {
      //   path: 'signup',
      //   component: SignupComponent
      // 	}
    ]
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    Ng2SmartTableModule,
    TableModule,
    AgGridModule.withComponents([])
  ],
  declarations: [CategoryComponent]
})
export class ApplicationModule {}
