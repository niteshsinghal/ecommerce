import { UsersComponent } from "./users/users.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostsComponent } from "./posts/posts.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { AlbumsComponent } from "./albums/albums.component";
import { PhotosComponent } from "./photos/photos.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Blog",
      status: false
    },
    children: [
      {
        path: "posts",
        component: PostsComponent
      }
    ]
  }
];

// const routes2: Routes = [
//   { path: "posts", component: PostsComponent },
//   { path: "posts/:id", component: PostsComponent },
//   { path: "post/:id", component: PostDetailComponent },
//   { path: "users", component: UsersComponent },
//   { path: "user/:id", component: UserComponent },
//   { path: "albums", component: AlbumsComponent },
//   { path: "photos", component: PhotosComponent },
//   { path: "photos/:albumId", component: PhotosComponent }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
