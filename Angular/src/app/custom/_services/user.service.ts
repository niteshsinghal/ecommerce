import { environment as env } from "./../../../environments/environment";
import { IAuth, IToken } from "./../_interface/IAuth";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { IUser } from "./../_interface/IUser";

@Injectable()
export class UserService {
  constructor(public http: Http) {}
  // public getUserList() {
  //   let url: string = env.sampleApi.baseUrl + env.sampleApi.users;
  //   return this.http.get(url).map((res: Response) => {
  //     return  res.json()
  //   });
  // }

  getUserList() {
    let apiUrl = env.sampleApi.baseUrl + env.sampleApi.users;
    return this.http.get(apiUrl).map((res: Response) => {
      return res.json();
    });
  }
  getUserById(userId: number) {
    let apiUrl =
      env.sampleApi.baseUrl + env.sampleApi.userById + "/" + userId.toString();
    return this.http.get(apiUrl).map((res: Response) => {
      return res.json();
    });
  }

  UpdateUser(userId: number, user: IUser) {
    let apiUrl =
      env.sampleApi.baseUrl + env.sampleApi.userById + "/" + userId.toString();
    return this.http.put(apiUrl, user).map((res: Response) => {
      return res.json();
    });
  }
}
