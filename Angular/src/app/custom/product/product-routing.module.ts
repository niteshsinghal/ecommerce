import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "../product/product-list/product-list.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Products",
      status: false
    },
    children: [
      {
        path: "list",
        component: ProductListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
