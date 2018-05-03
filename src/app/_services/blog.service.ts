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
  public getPost(id: number) {
    let apiUrl = env.blogApi.baseUrl + env.blogApi.post + "/" + id;
    return this.http.get(apiUrl).map((res: Response) => {
      return res.json();
    });
  }
  public getPostByUser(userId: number) {
    let apiUrl = env.blogApi.baseUrl + env.blogApi.posts + "?userId=" + userId;
    return this.http.get(apiUrl).map((res: Response) => {
      return res.json();
    });
  }
  public getUsers() {
    let apiUrl = env.blogApi.baseUrl + env.blogApi.users;
    return this.http.get(apiUrl).map((res: Response) => {
      return res.json();
    });
  }
  public getUser(id: number) {
    let apiUrl = env.blogApi.baseUrl + env.blogApi.user + "/" + id;
    return this.http.get(apiUrl).map((res: Response) => {
      return res.json();
    });
  }

  public getAlbums() {
    let apiUrl = env.blogApi.baseUrl + env.blogApi.albums;
    return this.http.get(apiUrl).map((res: Response) => {
      return res.json();
    });
  }

  public getPhotosByAlbum(albumId: number) {
    let apiUrl =
      env.blogApi.baseUrl + env.blogApi.photos + "?albumId=" + albumId;
    return this.http.get(apiUrl).map((res: Response) => {
      return res.json();
    });
  }
}
