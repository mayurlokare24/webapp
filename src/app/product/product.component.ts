import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  col_count:number = 3;
  inner_width:number = window.innerWidth;
  inner_height:number = window.innerHeight;
  public products:any[] = [
    {product_name: "Nokia 4300", url: "../../assets/images/image1.jpeg", price:"7999", descr:"Android one smart phone"},
    {product_name: "Nokia 4900", url: "../../assets/images/image2.jpeg", price:"12999", descr:"Android one plus smart phone"},
    {product_name: "Nokia 3500", url: "../../assets/images/image3.jpeg", price:"6999", descr:"Basic version smart phone"},
    {product_name: "Nokia 3900", url: "../../assets/images/image4.jpeg", price:"8499", descr:"Android one smart phone with HD cam"},
    {product_name: "Nokia 6000", url: "../../assets/images/image5.jpeg", price:"9999", descr:"Android one smart phone with dual cam"},
    {product_name: "Nokia 1080X", url: "../../assets/images/image6.jpeg", price:"19999", descr:"Android one smart phone with Quad Core processor"},
    {product_name: "Nokia 720X", url: "../../assets/images/image7.jpeg", price:"13499", descr:"Android one smart phone with Gorilla glass"},
    {product_name: "Nokia 4500", url: "../../assets/images/image8.jpeg", price:"11999", descr:"Android one smart phone with notch display"},
    {product_name: "Nokia 2900BS", url: "../../assets/images/image9.jpeg", price:"5999", descr:"Android one smart phone with facebook, tweeter"}
  ]

  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 768) 
    {
      this.col_count = 1;
    } 
    else if( window.innerWidth > 768 && window.innerWidth <= 992)
    {
      this.col_count = 2;
    }
    else
    {
      this.col_count = 3;
    }
  }

  onResize(event)
  {
    this.inner_width = event.target.innerWidth;
    this.inner_height = event.target.innerHeight;
    if (event.target.innerWidth < 768) 
    {
      this.col_count = 1;
    } 
    else if( event.target.innerWidth > 768 && event.target.innerWidth <= 992)
    {
      this.col_count = 2;
    }
    else
    {
      this.col_count = 3;
    }
  }



}
