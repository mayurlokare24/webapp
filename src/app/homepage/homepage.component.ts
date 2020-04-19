import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { animate, trigger, transition, keyframes, style, AnimationAnimateMetadata, AnimationStyleMetadata, state } from '@angular/animations';
import { images } from '../model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    trigger('slideTransition', [
      // state('*', style({ marginLeft: '{{pageMarginValue}}%' }), {params: {pageMarginValue: 0}}),
      // transition('*=>*', animate('2s ease infinite'))
      transition('*=>*', [
        animate('10s', keyframes([
           style({ background: 'red' }),
           style({ background: 'green' }),
           style({ background: 'yellow' }),
           style({ background: 'pink' }),
           style({ background: 'white' })]
          //images
        ))
      ]),
    ]), 
  ]
})
export class HomepageComponent implements OnInit {
  Id:number;
  selectedIndex: number;
  currentMargin=0;
  step = 10;
  styls:AnimationStyleMetadata[] = [
    style({ background: 'red' }),
         style({ background: 'green' }),
          style({ background: 'yellow' }),
          style({ background: 'pink' }),
          style({ background: 'white' })
  ]
  anim:AnimationAnimateMetadata = animate("10s", keyframes(this.styls));

  sliderArray = [
    { img: '../../assets/images/grocery.jpg', title: 'Grocery' },
    { img: '../../assets/images/Cloth.jpg', title: 'Cloth' },
    { img: '../../assets/images/electronics.jpg', title: 'Electronic' },
    { img: '../../assets/images/footwear.jpg', title: 'Footwear' },
    { img: '../../assets/images/cosmetics.jpg', title: 'Cosmetics' },
    { img: '../../assets/images/jewellary.jpg', title: 'Jewellary' }
  ];

  constructor(private router: Router,private route: ActivatedRoute,private userService:UserService) {
    // this.selectedIndex = 0;
    // interval(4000).subscribe(val => this.selectedNext());
  }

  

  ngOnInit() {
     this.Id = Number(this.route.snapshot.paramMap.get("id"));
     this.userService.setId(this.Id);

    
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
