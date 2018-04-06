import { Component, OnInit } from '@angular/core';
import { IUser } from '../_interface/IUser';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from"./../_services/user.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private userService: UserService) { }
  userId:number;
  User:IUser;
  loaded:boolean = false;
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
       this.userId = params["userId"];
      console.log(this.userId);
    });
   this.GetDetails();
  }
  public GetDetails()
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

