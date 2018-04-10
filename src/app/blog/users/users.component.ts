import { Http } from "@angular/http";
import { Post } from "./../../_interface/post";
import { Component, OnInit, ViewChild } from "@angular/core";
import { BlogService } from "../../_services/blog.service";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { User } from "../../_interface/user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styles: []
})
export class UsersComponent {
  users: User[];
  displayedColumns = ["name", "email", "phone"];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  populatePosts() {
    this.blogService.getUsers().subscribe(response => {
      this.users = response;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  constructor(private blogService: BlogService, private router: Router) {
    this.dataSource = null;
    this.populatePosts();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
