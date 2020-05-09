import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormArray, FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { ValueMap } from '../model';
import { NotificationService } from '../notification.service';
import { ProductService } from '../product.service';
import { ProductBrands, ProductType, AddProduct } from '../product.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProductService]

})
export class EditComponent implements OnInit {
  selectedFiles: FileList;
  selectedFile:File = null;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
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
  addProductSizeControl = new FormControl();
  addProductQuantityControl = new FormControl();
  addProductPriceControl = new FormControl();
  description = new FormControl();
  ProductList = new FormArray([]);
  step:number;
  productBrands:ProductBrands[];
  
  constructor(private _addProductService: ProductService, private _notification: NotificationService, private pv: FormBuilder, private userService:UserService, private router: Router) {
    this.step = 0;
  }

  ngOnInit() {
    console.log("getID = " + this.userService.getId());
    if (this.userService.getId()==2)
    {
      this.router.navigate(['/home']);
    }
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
  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
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
    
  // addProduct() {
  //   this.currentFileUpload = this.selectedFiles.item(0);

  //   const addProducts: AddProduct = {
  //     // id:this.selectProductControl.value,
  //     name: this.addProductControl.value,
  //     typeId: this.selectProductTypeControl.value,
  //     categoryId: this.selectProductCategoriesControl.value,
  //     brandId: this.selectProductBrandControl.value,
  //     productAmount: this.addProductPriceControl.value,
  //     quantity: this.addProductQuantityControl.value,
  //     grammageId:this.addProductSizeControl.value,
  //     description : this.description.value,
  //    // imagefile   : this.selectedFiles.item(0),



  //  //= this.selectedFiles.item(0);
  //   }
  //   console.log(addProducts);

  //   this._addProductService.saveProduct(addProducts,this.currentFileUpload).subscribe(result => {
  //     console.log(result);
  //     this._notification.showSuccessNotification('top', 'right', 'Product Successfully Saved');
  //     this.ProductList.reset();
  //     this.addProductControl.reset();
  //     window.location.reload();
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  addProduct() {
  this.currentFileUpload = this.selectedFiles.item(0);
  var product=this.addProductControl.value;
  var brandId=this.selectProductBrandControl.value;
  var categoryId=this.selectProductCategoriesControl.value;
  var typeId=this.selectProductTypeControl.value;
  var price = this.addProductPriceControl.value;
  var quantity = this.addProductQuantityControl.value;
  var gram = this.addProductSizeControl.value;
  var description=this.description.value;
 


   this._addProductService.pushFileToStorage(this.currentFileUpload,product,brandId,categoryId,typeId,price,quantity,gram,description).subscribe(event => {
     if (event.type === HttpEventType.UploadProgress) {
       this.progress.percentage = Math.round(100 * event.loaded / event.total);
     } else if (event instanceof HttpResponse) {
       console.log('File is completely uploaded!');
     }
   });

  this.selectedFiles = undefined;
  }
  setStep(stepVal:number) {

  }
  
}
