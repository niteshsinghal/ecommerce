import { UsersComponent } from "./users/users.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostsComponent } from "./posts/posts.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "posts", component: PostsComponent },
  { path: "posts/:id", component: PostsComponent },
  { path: "post/:id", component: PostDetailComponent },
  { path: "users", component: UsersComponent },
  { path: "user/:id", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
