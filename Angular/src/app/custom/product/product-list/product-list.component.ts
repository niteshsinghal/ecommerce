import { ProductService } from "./../product.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Product } from "../_exports/Product";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styles: []
})
export class ProductListComponent implements OnInit {
  productsList: Product[];
  dataSource: MatTableDataSource<Product>;
  userId: number = 0;
  displayedColumns = [
    "productName",
    "categoryName",
    "unitPrice",
    "quantityPerUnit"
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public prodService: ProductService,
    private router: Router,
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe(res => {
      this.userId = res.id;
    });
    this.dataSource = null;
  }

  ngOnInit() {
    if (this.userId > 0) {
      this.SearchProductsList();
    } else {
      this.LoadProductsList();
    }
  }
  SearchProductsList() {
    this.prodService.getProductsList().subscribe(
      response => {
        this.productsList = response["model"];

        this.dataSource = new MatTableDataSource(this.productsList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => {}
    );
  }
  LoadProductsList() {
    this.prodService.getProductsList().subscribe(
      response => {
        this.productsList = response["model"];
        this.dataSource = new MatTableDataSource(this.productsList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => {}
    );
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
