import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 user : User = new User();
  constructor(private userService:UserService) { }

  ngOnInit() {
    //this.users = new User();
  }
  register(){
    console.log("Name : " + this.user.firstname);
  this.userService.saveUsers(this.user).subscribe( data => {
console.log(data);
    alert("User created successfully.");
  });
  
}

}
