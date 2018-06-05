import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { TableModule } from "ngx-easy-table";
import { CategoryComponent } from "./category/category.component";
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
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes), TableModule],
  declarations: [CategoryComponent]
})
export class ApplicationModule {}
