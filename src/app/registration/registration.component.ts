import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  //@Input() parentId : number;
  user : User = new User();
 Id:number;
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit() {
    //this.users = new User();
   // console.log(this.parentId);
   this.Id = this.userService.getId();
   console.log(this.userService.getId());

  }
  register(){
    
    console.log("Name : " + this.user.firstname);
    if(this.Id==1){
      this.user.usertype=1;
    }
    else{
      this.user.usertype=2;
    }
  this.userService.saveUsers(this.user).subscribe( data => {
    
console.log(data);
    alert("User created successfully.");
    this.router.navigate(["/login"]);

  });

}

}
