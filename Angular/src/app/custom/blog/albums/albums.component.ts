import { Album } from "./../../_interface/album";
import { Component, OnInit } from "@angular/core";
import { BlogService } from "../../_services/blog.service";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styles: []
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.loadAlbums();
  }

  loadAlbums() {
    this.blogService.getAlbums().subscribe(response => {
      this.albums = response;
    });
  }
}
