import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  constructor(protected http:HttpClient, private cookies: CookieService) { }

  consultLogin(login: any): Observable<any>{
    return this.http.post('http://demo.my-deliveryapp.com:1337/v1/auth', login);
  }
  
  setToken(token: any) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  getLogged() {
    const token = this.getToken();
    console.log("Este es el token: " + token);
    // Aquí iría el endpoint para devolver el usuario para un token
  }
  
}
