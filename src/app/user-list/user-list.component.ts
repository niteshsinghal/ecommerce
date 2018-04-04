import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
public userlist:any[]=[
  {name: "pavan",age:10,profile:"A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#."},
  {name: "rajesh",age:20,profile:"A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#."},
  {name:"Bob",age:25,profile:"A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#."},
]
  constructor() { }

  ngOnInit() {
  }

}
