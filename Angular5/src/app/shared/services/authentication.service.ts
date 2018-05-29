import { environment as env } from "./../../../environments/environment";
import { IAuth, IToken } from "../entity/IAuth";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, filter, switchMap, catchError } from "rxjs/operators";
@Injectable()
export class AuthenticationService {
  postHeaders = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
  constructor(public http: HttpClient) {}

  public login(auth) {
    let url: string = env.API.Base + env.API.Token;
    let body = new HttpParams()
      .set("username", auth.username)
      .set("password", auth.password)
      .set("grant_type", "password");

    return this.http.post(url, body, { headers: this.postHeaders });
  }
  public logout() {
    localStorage.removeItem("LOGIN_USER");
  }
  get IsAuthenticated(): boolean {
    return localStorage.getItem("LOGIN_USER") ? true : false;
  }
  get User(): string {
    return (JSON.parse(localStorage.getItem("LOGIN_USER")) as IToken).username;
  }
  get Token(): string {
    return (JSON.parse(localStorage.getItem("LOGIN_USER")) as IToken).username;
  }
}
