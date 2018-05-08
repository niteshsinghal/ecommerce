import { BlogService } from "./../../_services/blog.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styles: []
})
export class UserComponent implements OnInit {
  userId: number = 0;
  user;
  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.route.params.subscribe(res => {
      this.userId = res.id;
    });
  }

  ngOnInit() {
    this.getuserData();
  }
  getuserData() {
    this.blogService.getUser(this.userId).subscribe(response => {
      this.user = response;
    });
  }
}
