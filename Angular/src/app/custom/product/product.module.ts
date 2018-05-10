import { ProductService } from "./product.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductListComponent } from "../product/product-list/product-list.component";

@NgModule({
  imports: [CommonModule, ProductRoutingModule],
  providers: [ProductService],
  declarations: [ProductListComponent]
})
export class ProductModule {}
