import { Http } from "@angular/http";
import { Post } from "./../../_interface/post";
import { Component, OnInit } from "@angular/core";
import { BlogService } from "../../_services/blog.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styles: []
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private blogService: BlogService) {
    this.populatePosts();
  }
  populatePosts() {
    this.blogService.getPosts().subscribe(response => {
      this.posts = response;
    });
  }
  ngOnInit() {}
}
