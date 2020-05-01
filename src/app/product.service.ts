import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

saveProduct(addProducts: AddProduct) {
  const URL =  'http://localhost:8085/product/saveproduct';
  return this.http.post<AddProduct>(URL, addProducts);
}
}

