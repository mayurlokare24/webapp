import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User, Login } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login1 : Login = new Login();;
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(){
    
  }
 
  login(){
    this.userService.login(this.login1).subscribe( Response => {
      if(Response==true){
        alert("login success");
      }
      else{
        alert("login fail");
      }      
    });
  }

}
