import { style, AnimationStyleMetadata } from '@angular/animations';

export class User{
    Id: number;
    username: string;
    password:string;
    firstname:string;
    lastname:string;
    address:string;
    gender:string;
    dob:string;
    userid:number;
    mobileno:string;
    email:string;

  
    constructor(){}

}
export class Login{
    username:string;
    password:string;
}
export class ProductDomain{
    domainName:string;
    imgURL:any;
}

export const images:AnimationStyleMetadata[] = [
    style({ background: 'red' }),
          style({ background: 'green' }),
          style({ background: 'yellow' }),
          style({ background: 'pink' }),
          style({ background: 'white' })
]