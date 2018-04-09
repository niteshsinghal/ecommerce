import { Component, OnInit } from '@angular/core';
import { IUser } from '../_interface/IUser';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from"./../_services/user.service";
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  myEditForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,private userService: UserService,
    private router: Router) { }
  userId:number;
  User:IUser;
  loaded:boolean = false;
  ngOnInit() {
    this.myEditForm = new FormGroup({
        id : new FormControl(),
        first_name:new FormControl(),
        last_name:new FormControl(),
        avatar:new FormControl()

    });

    this.activatedRoute.params.subscribe((params: Params) => {
      debugger; 
      if(params.length > 0)
      {
        this.userId = params["userId"];
        console.log(this.userId);
        this.GetDetails();
      }
      else
      {
        this.loaded = true;
        this.myEditForm.setValue({"id":4,"first_name":'',"last_name":'',"avatar":''});
      }
    });
    
  }
  public GetDetails()
  {
    //alert(this.userId);
    debugger;
    if(this.userId != null)
    { 
      this.userService.getUserById(this.userId).subscribe(data => {
        //debugger;
        //alert(data);
        this.User = data.data; //JSON.parse(data.toString()).data;
        this.myEditForm.setValue(this.User);
        console.log(this.myEditForm.value)
        this.loaded = true;
        //debugger;
        //alert(this.User.id);
        //alert(this.User.first_name);
      });
    }
    else
    {

    }
  }

  public SaveMe()
  {
    
    //debugger;
    console.log( this.myEditForm.value);
    this.User = this.myEditForm.value;
    this.userService.UpdateUser(this.User.id,this.User).subscribe(data => {
//debugger;
      if(data.updatedAt != null)
      {
        alert("User Updated Successfully");
        this.router.navigate(["/UserList"]);
      }

    });
  }
}

