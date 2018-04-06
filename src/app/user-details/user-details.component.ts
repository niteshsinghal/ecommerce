import { Component, OnInit } from '@angular/core';
import { IUser } from '../_interface/IUser';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from"./../_services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private userService: UserService) { 
   
  }
  userId:number;
  User:IUser;
loaded:boolean = false;
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
       this.userId = params["userId"];
      console.log(this.userId);
    });
   this.ShowDetails();
  }
  public ShowDetails()
  {
    //alert(this.userId);
    this.userService.getUserById(this.userId).subscribe(data => {
      debugger;
      //alert(data);
      this.User = data.data; //JSON.parse(data.toString()).data;
      this.loaded = true;
      //debugger;
      //alert(this.User.id);
      //alert(this.User.first_name);
    });
  }
}
