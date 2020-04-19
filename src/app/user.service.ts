import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Login } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Id:number;
  httpClient: any;
  //public static API_ENDPOINT='http://localhost:8085/';


  constructor(private http: HttpClient) { }


  saveUsers(user : User) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' 
    })
    };
   // const URL = "users/saveuser";
    return this.http.post("http://localhost:8085/users/saveuser", user, httpOptions);  
  } 

  getUsers(): Observable<any> {  
    return this.http.get("http://localhost:8085/users/getuser");  
  }
  
  login(login : Login) : Observable<any>{
    return this.http.post("http://localhost:8085/users/loginuser",login);
  }

  // product(product : Product) : Observable<any>{
  //   return this.http.post()
  // }

   getId(): number {
    return this.Id;
 }
 setId(id: number) {
    this.Id = id;
 }


 
 }

 

