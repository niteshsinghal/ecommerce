import { Component, AfterViewInit, OnInit, ViewChild } from "@angular/core";
import { CategoryService } from "../../shared/services/category.service";
import { Category } from "../../shared/entity/ecommerce";
import { ConfigService } from "../../shared/services/config.service";

@Component({
  templateUrl: "./category.component.html",
  providers: [ConfigService]
})
export class CategoryComponent implements AfterViewInit, OnInit {
  categories: any;
  data = [];
  configuration;
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.loadCategories();
  }

  ngAfterViewInit() {}

  loadCategories() {
    this.configuration = ConfigService.config;
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
      this.configuration.isLoading = false;
    });
  }

  deleteCategory(row) {
    console.log(row);
  }

  editCategory(row) {
    console.log(row);
  }

  columns = [
    { title: "Category ID", key: "categoryID" },
    { title: "Category Name", key: "categoryName" },
    { title: "Category Description", key: "description" }
  ];
}
