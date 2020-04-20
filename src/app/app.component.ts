import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webApp';

  constructor(private router : Router){}


  additem():void {
    this.router.navigateByUrl('product');
};
  
}
