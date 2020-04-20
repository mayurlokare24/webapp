import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductDomain } from '../model';

@Component({
  selector: 'app-product-domain',
  templateUrl: './product-domain.component.html',
  styleUrls: ['./product-domain.component.css']
})
export class ProductDomainComponent implements OnInit {

  private domainName:string;
  private sub:Subscription;
  public productDomain:ProductDomain;
  public selectedFile;

  constructor(private route: ActivatedRoute,
    private router: Router) {
      this.productDomain = new ProductDomain();
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
