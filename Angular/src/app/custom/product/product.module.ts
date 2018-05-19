import { ProductService } from "./product.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductListComponent } from "../product/product-list/product-list.component";
import { SharedModule } from "../../shared/shared.module";
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [CommonModule, ProductRoutingModule, SharedModule],
  providers: [ProductService],
  declarations: [ProductListComponent, ProductDetailComponent]
})
export class ProductModule {}
