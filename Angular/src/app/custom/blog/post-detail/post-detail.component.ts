import { FormGroup, FormBuilder } from "@angular/forms";
import { BlogService } from "./../../_services/blog.service";
import { Component, OnInit } from "@angular/core";
import { RouterStateSnapshot, Router, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styles: []
})
export class PostDetailComponent implements OnInit {
  postId: number = 0;
  postDetailForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private fb: FormBuilder,
    private title: Title
  ) {
    this.createForm();

    this.route.params.subscribe(res => {
      this.postId = res.id;
    });
  }

  ngOnInit() {
    this.bindPostDetail();
  }
  createForm() {
    this.postDetailForm = this.fb.group({
      userId: "",
      id: "",
      title: "",
      body: ""
    });
  }
  bindPostDetail() {
    if (this.postId > 0) {
      this.blogService.getPost(this.postId).subscribe(response => {
        // this.postDetailForm.setValue({
        //   userId: response.userId,
        //   id: response.id,
        //   title: response.title,
        //   body: response.body
        // });
        this.postDetailForm.setValue(response);
        this.title.setTitle(this.postDetailForm.value.title);
      });
    }
  }
}
