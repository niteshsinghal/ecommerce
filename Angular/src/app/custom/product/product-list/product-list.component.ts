import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../_exports/Product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styles: []
})
export class ProductListComponent implements OnInit {
  productsList: Product[];
  constructor(public prodService: ProductService) {}

  ngOnInit() {
    this.loadProductsList();
  }

  loadProductsList() {
    this.prodService.getProductsList().subscribe(
      response => {
        this.productsList = response["model"];
        console.log(this.productsList);
      },
      err => {}
    );
  }
}
