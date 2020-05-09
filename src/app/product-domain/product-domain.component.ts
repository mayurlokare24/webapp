import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
//import { ProductDomain } from '../model';

@Component({
  selector: 'app-product-domain',
  templateUrl: './product-domain.component.html',
  styleUrls: ['./product-domain.component.css']
})
export class ProductDomainComponent implements OnInit {

  private domainName:string;
  private sub:Subscription;
  //public productDomain:ProductDomain;
  public selectedFile;
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
  ];

  constructor(private route: ActivatedRoute,
    private router: Router) {
      //this.productDomain = new ProductDomain();
      this.domainName = this.route.snapshot.paramMap.get('domain_name');
      console.log("Domain_name = " + this.domainName );
     }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params=>{
      //this.domainName = params['domain_name'];
      //console.log("Received Domain Name : " + this.domainName);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
}
