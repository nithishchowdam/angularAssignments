import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userObj:UserdataService) { }
  users:any[]=[]
  userSubscription:any;
  ngOnInit(): void {
    this.userSubscription=this.userObj.getClientUserData().subscribe(
      data=>{this.users=data},
      err=>{console.log("error :",err)}
    )
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe()
  }

}
