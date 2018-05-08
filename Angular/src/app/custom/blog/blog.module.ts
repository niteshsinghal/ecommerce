import { BlogService } from "./../_services/blog.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BlogRoutingModule } from "./blog-routing.module";
import { PostsComponent } from "./posts/posts.component";
import { MaterialModule } from "../_shared/material.module";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";
import { AlbumsComponent } from "./albums/albums.component";
import { PhotosComponent } from "./photos/photos.component";
import { PhotoCardComponent } from "./photos/photo-card.component";
import { SummaryPipe } from "../_shared/summary.pipe";
//import { PhotoBigComponent } from './photos/photo-big.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [BlogService],
  declarations: [
    PostsComponent,
    PostDetailComponent,
    UserComponent,
    UsersComponent,
    AlbumsComponent,
    PhotosComponent,
    PhotoCardComponent,
    SummaryPipe
  ]
})
export class BlogModule {}
