import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "../product/product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

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
      },
      {
        path: "detail/:productid",
        component: ProductDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
