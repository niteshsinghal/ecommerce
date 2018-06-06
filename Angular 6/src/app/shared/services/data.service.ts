import { throwError as observableThrowError, Observable } from "rxjs";
import { environment as env } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map, filter, switchMap, catchError } from "rxjs/operators";
//import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { AuthenticationService } from "./authentication.service";
import { employee, employeeCard, employeePositionCard } from "../entity/employee";

@Injectable()
export class DataService {
  postHeaders = new HttpHeaders()
    .set("content-type", "application/json; charset=utf-8")
    .set("Authorization", "Bearer " + this.authService.Token);

  // body = new HttpParams().set("Authorization", "bearer " + this.authService.Token);

  constructor(public http: HttpClient, private authService: AuthenticationService) {}

  getEmployees(): Observable<employee[]> {
    let url: string =
      env.API.Base + env.API.Employees + "?loggedInPersonId=" + this.authService.PersonId + "";
    return this.http
      .get<employee[]>(url, { headers: this.postHeaders })
      .catch((error: any) => observableThrowError("Server error" + error));
  }
  getEmployeeCard(personID: number): Observable<employeeCard> {
    let url: string = env.API.Base + env.API.EmployeeCard + "?personID=" + personID + "";
    return this.http
      .get<employeeCard>(url, { headers: this.postHeaders })
      .catch((error: any) => observableThrowError("Server error" + error));
  }
  getPositionCard(personID: number): Observable<employeePositionCard> {
    let url: string = env.API.Base + env.API.PositionCard + "?personID=" + personID + "";
    return this.http
      .get<employeePositionCard>(url, { headers: this.postHeaders })
      .catch((error: any) => observableThrowError("Server error" + error));
  }
}
