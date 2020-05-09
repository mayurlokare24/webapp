export class ProductBrands {
    
    //id: number;
    typeId:number;
    brandname: string;
    
}
export class ProductCategories {
    id: number;
    name: string;
}

export class ProductType{
typename:string;
categoryId:number;

}


export class AddProduct{
    // id:number;
    typeId:any;
    categoryId: any;
    brandId:number;
    name:string;
    productAmount:number;
    quantity:number;
    grammageId:number;
    description:string;
   // imagefile:any;

}
export class Grammage{
    id:number;
    size:number;
}



