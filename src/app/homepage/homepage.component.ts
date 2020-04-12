import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  selectedIndex: number;

  sliderArray = [
    { img: '../../assets/images/grocery.jpg', title: 'Grocery' },
    { img: '../../assets/images/Cloth.jpg', title: 'Cloth' },
    { img: '../../assets/images/electronics.jpg', title: 'Electronic' },
    { img: '../../assets/images/footwear.jpg', title: 'Footwear' },
    { img: '../../assets/images/cosmetics.jpg', title: 'Cosmetics' },
    { img: '../../assets/images/jewellary.jpg', title: 'Jewellary' }
  ];

  constructor(private router: Router) {
    this.selectedIndex = 0;
    interval(4000).subscribe(val => this.selectedNext());
  }

  ngOnInit() {
  }

  additem(): void {
    this.router.navigateByUrl('product');
  };

  selectedNext() {this.selectedIndex = ++this.selectedIndex > 5 ? 0 : this.selectedIndex;}
  selectedPrev() {this.selectedIndex = --this.selectedIndex < 0 ? 5 : this.selectedIndex;}

  OpenDomain(imgInfo:any)
  {
    this.router.navigate(['productDomain'], {queryParams: {domain_name: imgInfo}});
  }
}
