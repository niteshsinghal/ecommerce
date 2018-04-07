import { BlogService } from "./../_services/blog.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BlogRoutingModule } from "./blog-routing.module";
import { PostsComponent } from "./posts/posts.component";
import { MaterialModule } from "../_shared/material.module";
@NgModule({
  imports: [CommonModule, BlogRoutingModule, MaterialModule],
  providers: [BlogService],
  declarations: [PostsComponent]
})
export class BlogModule {}
