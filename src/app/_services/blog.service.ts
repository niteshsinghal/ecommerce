import { environment as env } from "./../../environments/environment";
import { IAuth, IToken } from "./../_interface/IAuth";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class BlogService {
  constructor(public http: Http) {}

  public getPosts() {
    let apiUrl = env.blogApi.baseUrl + env.blogApi.posts;
    return this.http.get(apiUrl).map((res: Response) => {
      return res.json();
    });
  }
}
