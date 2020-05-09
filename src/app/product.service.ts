import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AddProduct, ProductBrands, ProductCategories, ProductType } from './product.model';


@Injectable()
export class ProductService{

  constructor(public http: HttpClient) {
  }

saveCategory(category: string) {
  console.log(category);
  const URL =  'http://localhost:8085/product/savecategory';
  return this.http.post<AddProduct>(URL, category);
}
saveType(addtype: ProductType) {
  console.log(addtype);
  const URL =  'http://localhost:8085/product/saveproducttype';
  return this.http.post<AddProduct>(URL, addtype);
}

getProductCategories() {
  const URL =  'http://localhost:8085/product/getproductCategories';
  return this.http.get<ProductCategories[]>(URL);
}

getProductType() {
  //let abc = "" + categoryId;
  const URL = 'http://localhost:8085/product/getProductType'
  return this.http.get<ProductType[]>(URL);
}

getProductTypes(categoryId:any) {
  //let abc = "" + categoryId;
  const URL = 'http://localhost:8085/product/getProductTypes/' +categoryId;
  return this.http.get<ProductType[]>(URL);
}

getProductBrands(typeId:any) {
  const URL = 'http://localhost:8085/product/getProductBrands/' + typeId;
  return this.http.get<ProductBrands[]>(URL);
}

saveBrand(addbrand: ProductBrands){
  const URL =  'http://localhost:8085/product/saveproductbrand';
  return this.http.post<ProductBrands>(URL, addbrand);
}

// saveProduct(addProducts: AddProduct,file: any) {
//   const formdata=new FormData();
//     formdata.append('file', file);
//   const URL =  this.http.post('http://localhost:8085/product/saveproduct',formdata);
//   return this.http.request<AddProduct>(URL, addProducts);
// }
pushFileToStorage(file: any,product:any,brandId:any,categoryId:any,typeId:any,price:any,quantity:any,gram:any,description:any) {
  const formdata: FormData = new FormData();
   console.log('siddhesh')
    formdata.append('file', file);
   //  JSON.stringify(productId);

    //var strg = JSON.stringify(productId);
    //var product = JSON.parse(product);
    formdata.append('product',product);
   // var strg1 = JSON.stringify(brandId);
   //var brand = JSON.parse(brandId);
    formdata.append('brandId', brandId);
    //var strg2 = JSON.stringify(categoryId);
    //var category = JSON.parse(categoryId);
    formdata.append('categoryId', categoryId);
  //  var strg3 = JSON.stringify(description);
 //   var description = JSON.parse(description);
    formdata.append('description', description);
    formdata.append('typeId',typeId);
    formdata.append('price',price);
    formdata.append('quantity',quantity);
    formdata.append('gram',gram);

    
   
  
    const req = new HttpRequest('POST', 'http://localhost:8085/product/saveproduct', formdata, {
      reportProgress: true,
      responseType: 'text',
      

      
    });

    return this.http.request(req);
  }
}

