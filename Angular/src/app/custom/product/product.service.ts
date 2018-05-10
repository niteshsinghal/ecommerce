import { environment as env } from "./../../../environments/environment";
import { IAuth, IToken } from "./../_interface/IAuth";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {
  postHeaders = new HttpHeaders().set(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  constructor(public http: HttpClient) {}

  public getProductsList() {
    let url: string = env.API.Base + env.API.Products;
    return this.http.get(url, { headers: this.postHeaders });
  }
}
