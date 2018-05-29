import { throwError as observableThrowError, Observable } from "rxjs";
import { environment as env } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map, filter, switchMap, catchError } from "rxjs/operators";
//import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { AuthenticationService } from "./authentication.service";
import { Category } from "../entity/ecommerce";

@Injectable()
export class CategoryService {
  postHeaders = new HttpHeaders().set("content-type", "application/json; charset=utf-8");
  //.set("Authorization", "bearer " + this.authService.Token);

  // body = new HttpParams().set("Authorization", "bearer " + this.authService.Token);

  constructor(public http: HttpClient, private authService: AuthenticationService) {}

  getCategories(): Observable<Category[]> {
    let url: string = env.API.Base + env.API.Category;
    return this.http
      .get(url)
      .map((res: Response) => {
        let _response = res as any;
        if (!_response.error) return _response.model;
        else return observableThrowError("Server error" + _response.errorMessage);
      })
      .catch((error: any) => observableThrowError("Server error" + error));
  }
}
