import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  EventEmitter
} from "@angular/core";
import { Photo } from "../../_interface/album";

@Component({
  selector: "photo-card",
  template: `
    <div class="card">
        <img class="card-img-top" src="{{data.thumbnailUrl}}" alt="{{data.title}}" (click)="passDataToParent(data.url)">
        <div class="card-body">
        <p class="card-title">{{data.title | summary:25}}</p>
        </div>
    </div>
  `,
  styles: [
    `
     img {height:150px;width:150px;margin-top: 1.25rem;} 
    .card{align-items: center;text-align:center;margin-bottom: 10px;}
    `
  ]
})
export class PhotoCardComponent {
  @Input() data;
  @Output() passDataToParentEvent = new EventEmitter<string>();

  passDataToParent(imageUrl) {
    this.passDataToParentEvent.emit(imageUrl);
  }
}
