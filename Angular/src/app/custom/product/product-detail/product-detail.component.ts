import { ProductService } from "./../product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styles: []
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prodService: ProductService
  ) {
    this.route.params.subscribe(res => {
      console.log(res.productid);
    });
  }

  ngOnInit() {}
}
