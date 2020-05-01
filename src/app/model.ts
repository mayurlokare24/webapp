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
    usertype:number;

  
    constructor(){}

};



// export class ProductDomainInfo 
// {
//     domain_name:string,
//     domain_val:[]
// };

export class Login{
    username:string;
    password:string;
};


export class ValueMap {
    key:string;
    value:ValueMap[];

    constructor(key:string){}
};

export const images:AnimationStyleMetadata[] = [
    style({ background: 'red' }),
          style({ background: 'green' }),
          style({ background: 'yellow' }),
          style({ background: 'pink' }),
          style({ background: 'white' })
]