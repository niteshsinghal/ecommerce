import { Http } from "@angular/http";
import { Post } from "./../../_interface/post";
import { Component, OnInit, ViewChild } from "@angular/core";
import { BlogService } from "../../_services/blog.service";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styles: []
})
export class PostsComponent {
  userId: number = 0;
  posts: Post[];
  displayedColumns = ["userId", "title"];
  dataSource: MatTableDataSource<Post>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private blogService: BlogService,
    private router: Router,
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe(res => {
      this.userId = res.id;
    });
    this.dataSource = null;
    if (this.userId > 0) {
      this.populatePostsByUser();
    } else {
      this.populatePosts();
    }
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

  populatePosts() {
    this.blogService.getPosts().subscribe(response => {
      this.posts = response;
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  populatePostsByUser() {
    this.blogService.getPostByUser(this.userId).subscribe(response => {
      this.posts = response;
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
