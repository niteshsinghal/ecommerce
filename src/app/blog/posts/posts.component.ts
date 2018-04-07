import { Http } from "@angular/http";
import { Post } from "./../../_interface/post";
import { Component, OnInit, ViewChild } from "@angular/core";
import { BlogService } from "../../_services/blog.service";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styles: []
})
export class PostsComponent {
  posts: Post[];
  displayedColumns = ["userId", "id", "title"];
  dataSource: MatTableDataSource<Post>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  populatePosts() {
    this.blogService.getPosts().subscribe(response => {
      this.posts = response;
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  constructor(private blogService: BlogService) {
    this.dataSource = null;
    this.populatePosts();
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

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     " " +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     ".";

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }

/** Constants used to fill up our data base. */
// const COLORS = [
//   "maroon",
//   "red",
//   "orange",
//   "yellow",
//   "olive",
//   "green",
//   "purple",
//   "fuchsia",
//   "lime",
//   "teal",
//   "aqua",
//   "blue",
//   "navy",
//   "black",
//   "gray"
// ];
// const NAMES = [
//   "Maia",
//   "Asher",
//   "Olivia",
//   "Atticus",
//   "Amelia",
//   "Jack",
//   "Charlotte",
//   "Theodore",
//   "Isla",
//   "Oliver",
//   "Isabella",
//   "Jasper",
//   "Cora",
//   "Levi",
//   "Violet",
//   "Arthur",
//   "Mia",
//   "Thomas",
//   "Elizabeth"
// ];

// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }
