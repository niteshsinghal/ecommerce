import { Component, OnInit } from '@angular/core';
import { UserService } from"./../_services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
public userlist
// =[
//   {name: "pavan",age:10,profile:"A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#."},
//   {name: "rajesh",age:20,profile:"A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#."},
//   {name:"Bob",age:25,profile:"A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#."},
// ]
  constructor(private userService: UserService) {
    this.getUserList();
   }  

  ngOnInit() {
  }
  getUserList() {
      //alert('getuserlist');
      this.userService.getUserList().subscribe(data => {
        debugger;
        //alert(data);
        this.userlist = data.data; //JSON.parse(data.toString()).data;
      });
    }
}
