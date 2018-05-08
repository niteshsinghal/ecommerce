import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { BlogService } from "../../_services/blog.service";
import { Photo } from "../../_interface/album";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html"
})
export class PhotosComponent implements OnInit {
  albumId: number;
  photos: Photo[];
  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    if (_.has(this.route.snapshot.params, "albumId")) {
      this.albumId = this.route.snapshot.params["albumId"];
    }
  }

  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.blogService.getPhotosByAlbum(this.albumId).subscribe(response => {
      this.photos = response;
    });
  }
  recieveDataFromChild($event) {
    console.log($event);
  }
}
