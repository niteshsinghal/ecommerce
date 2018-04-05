import { environment as env } from "./../../environments/environment";
import { IAuth, IToken } from "./../_interface/IAuth";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthenticationService {
  constructor(public http: HttpClient) {}

  public login(auth: IAuth) {
    let url: string = env.sampleApi.baseUrl + env.sampleApi.login;
    return this.http.post(url, auth);
  }
  public logout() {
    localStorage.removeItem("LOGIN_USER");
  }
  get IsAuthenticated(): boolean {
    return localStorage.getItem("LOGIN_USER") ? true : false;
  }
  get User(): string {
    return (JSON.parse(localStorage.getItem("LOGIN_USER")) as IToken).email;
  }
}
