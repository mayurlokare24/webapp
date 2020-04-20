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


export class HomepageComponent implements OnInit {
  Id:number;
  selectedIndex: number;
  currentMargin = 0;
  step = 10;
  enableMenubar:boolean;
  menubar = [
    { title:'Grocery', icon:'home', submenu : ['Grains', 'Pulses', 'Snacks']},
    { title:'Electronic', icon:'settings_input_hdmi', submenu: ['Mobiles', 'Computers', 'Home Appliances', 'Kitchen Appliances']},
    { title:'Footwear', icon:'airline_seat_legroom_normal', submenu: ['Shoes', 'Sandle', 'Sleeper', 'Socks', 'Loafers']}
  ];
  styls: AnimationStyleMetadata[] = [
    style({ background: 'red' }),
    style({ background: 'green' }),
    style({ background: 'yellow' }),
    style({ background: 'pink' }),
    style({ background: 'white' })
  ]
  anim:AnimationAnimateMetadata = animate("10s", keyframes(this.styls));
  anim: AnimationAnimateMetadata = animate("10s", keyframes(this.styls));

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

    this.enableMenubar = false;
    this.selectedIndex = 0;
    interval(4000).subscribe(val => this.selectedNext());
  }

  ngOnInit() {
     this.Id = Number(this.route.snapshot.paramMap.get("id"));
     this.userService.setId(this.Id);

    this.enableMenubar = true;
    
  }

  additem(): void {
    this.router.navigateByUrl('product');
  };

  selectedNext() { this.selectedIndex = ++this.selectedIndex > 5 ? 0 : this.selectedIndex; }
  selectedPrev() { this.selectedIndex = --this.selectedIndex < 0 ? 5 : this.selectedIndex; }

  OpenDomain(imgInfo: any) {
    this.router.navigate(['productDomain'], { queryParams: { domain_name: imgInfo } });
  }
}
