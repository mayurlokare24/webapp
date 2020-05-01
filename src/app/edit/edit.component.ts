import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormArray, FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { ValueMap } from '../model';
import { NotificationService } from '../notification.service';
import { ProductService } from '../product.service';
import { ProductBrands, ProductType, AddProductVarition, AddProduct } from '../product.model';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProductService]

})
export class EditComponent implements OnInit {

  productCategories: any;
  productTypes:ProductType[];
  addCategoryControl = new FormControl();
  selectProductCategoriesControl = new FormControl();
  selectProductTypeControl = new FormControl();
  selectProductBrandControl = new FormControl();
  addBrandControl = new FormControl();
  addTypeControl = new FormControl();
  addProductAmountControl = new FormControl();
  addProductControl = new FormControl('', [Validators.required]);
  ProductList = new FormArray([]);
  step:number;
  productBrands:ProductBrands[];
  
  constructor(private _addProductService: ProductService, private _notification: NotificationService, private pv: FormBuilder) {
    this.step = 0;
  }

  ngOnInit() {
    this.getProductCategories();

  }

  getProductCategories() {
    this._addProductService.getProductCategories().subscribe(result => {
      this.productCategories = result;
      console.log(this.productCategories);
    }, error => {
      console.log(error);
    })
  }

  // getProductType() {
  //   this._addProductService.getProductType().subscribe(result => {
  //     this.productTypes = result;
  //     console.log(this.productTypes);
  //   }, error => {
  //     console.log(error);
  //   })
  // } 

  addCategory() {
    const category: string = this.addCategoryControl.value;
    this._addProductService.saveCategory(category).subscribe(result => {
      console.log(result);
      this._notification.showSuccessNotification('top', 'right', 'Product Successfully Saved');
      this.ProductList.reset();
      this.addProductControl.reset();
      window.location.reload();
      this.getProductCategories();
    }, error => {
      console.log(error);
    });

  }

  addType() {
    const addType: ProductType = {
      categoryId: this.selectProductCategoriesControl.value,
      typename: this.addTypeControl.value,
    }
    this._addProductService.saveType(addType).subscribe(result => {
      console.log(result);
      this._notification.showSuccessNotification('top', 'right', 'Product Successfully Saved');
      this.ProductList.reset();
      this.addProductControl.reset();
      window.location.reload();
    }, error => {
      console.log(error);
    });

  }

  OnProductCatagorySelection(categoryId) {
  //  console.log("Value = " + value);
    this.step++;
    this._addProductService.getProductTypes(categoryId).subscribe(result =>  {
      this.productTypes = result;
    }, error => {
      console.log(error);
    })
  }

  OnProductTypeSelection(typeId) {
    //  console.log("Value = " + value);
      this.step++;
      this._addProductService.getProductBrands(typeId).subscribe(result =>  {
        this.productBrands = result;
      }, error => {
        console.log(error);
      })
    }

 

  addBrand(){
    const addbrand:ProductBrands={
      typeId:this.selectProductTypeControl.value,
      brandname:this.addBrandControl.value,
    }
    this._addProductService.saveBrand(addbrand).subscribe(result => {
      console.log(result);
      this._notification.showSuccessNotification('top', 'right', 'Product Successfully Saved');
      this.ProductList.reset();
      this.addProductControl.reset();
      window.location.reload();
    }, error => {
      console.log(error);
    });
  }
    
  addProduct() {
       const productVariationList: AddProductVarition[] = [];
    this.ProductList.controls.forEach(productVariation => {
      const pv: AddProductVarition = {
        name: productVariation.get('Name').value,
        size: productVariation.get('Size').value,
        grammageId: productVariation.get('grammageId').value,
      };
      productVariationList.push(pv);
    });
    const addProducts: AddProduct = {
      // id:this.selectProductControl.value,
      name: this.addProductControl.value,
      // typeId: this.selectProductTypeControl.value,
      // categoryId: this.selectProductCategoriesControl.value,
      brandId: this.selectProductBrandControl.value,
      productAmount: this.addProductAmountControl.value,
      variations: productVariationList
    }
    console.log(addProducts);

    this._addProductService.saveProduct(addProducts).subscribe(result => {
      console.log(result);
      this._notification.showSuccessNotification('top', 'right', 'Product Successfully Saved');
      this.ProductList.reset();
      this.addProductControl.reset();
      window.location.reload();
    }, error => {
      console.log(error);
    });
  }

  setStep(stepVal:number) {

  }
  
}
