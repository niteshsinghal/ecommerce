import { BlogService } from "./../_services/blog.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BlogRoutingModule } from "./blog-routing.module";
import { PostsComponent } from "./posts/posts.component";
import { MaterialModule } from "../_shared/material.module";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BlogService],
  declarations: [PostsComponent, PostDetailComponent, UserComponent, UsersComponent]
})
export class BlogModule {}
