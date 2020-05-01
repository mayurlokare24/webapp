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
    // typeId:number;
    //categoryId: number;
    brandId:number;
    name:string;
    productAmount:number
    variations:AddProductVarition[];

}

export class AddProductVarition{
    size:number
    name:string
    grammageId:number
}