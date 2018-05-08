import { Component, OnInit } from "@angular/core";
import { UserService } from "./../_services/user.service";
import { IUser } from "../_interface/IUser";
import { UserDetailsComponent } from "./../user-details/user-details.component";
import { Router } from "@angular/router";
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  public userlist: IUser[];

  constructor(
    private userService: UserService,
    //private ul:UserDetailsComponent,
    private router: Router
  ) {
    this.getUserList();
  }

  ngOnInit() {}
  getUserList() {
    //alert('getuserlist');
    this.userService.getUserList().subscribe(data => {
      debugger;
      //alert(data);
      this.userlist = data.data; //JSON.parse(data.toString()).data;
    });
  }
  GetDetails(usr: IUser) {
    //alert(usr.id);
    //this.ul.ShowDetails(usr);
    this.router.navigate(["/UserDetail/" + usr.id.toString()]);
  }
}
