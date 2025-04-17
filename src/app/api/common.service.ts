import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private token: string | null;

  private LoginApiUrl = 'https://dummyjson.com/auth/login';
  private UserApiUrl = 'https://dummyjson.com/auth/me';
  private AllUserApiUrl = 'https://dummyjson.com/users';
  private AllProductsApiUrl = 'https://dummyjson.com/products';


  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
   }

  login(username: string , password: string) {
    const body = { username, password };
    return this.http.post<any>(this.LoginApiUrl, body);
  }

  getUserData(): Observable<any> {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.get<any>(this.UserApiUrl, { headers })
  }

  getAllUsers(): Observable<any>{
    return this.http.get<any>(this.AllUserApiUrl)
  }

  getAllProducts(): Observable<any>{
    return this.http.get<any>(this.AllProductsApiUrl)
  }
}
