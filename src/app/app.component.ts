import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webApp';
  userService: UserService;
  constructor(private router : Router, private userServie: UserService){
    this.userService = userServie;
  }

  additem():void {
    this.router.navigateByUrl('product');
};
  
}
