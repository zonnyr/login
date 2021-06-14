import { Component, OnInit } from '@angular/core';
import { ConsultService } from "../../services/consult.service";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  login: any[]=[];
  message: String = "";

  ngPhone: String = "";
  ngPass: String = "";

  constructor(public consultLogin: ConsultService, public router: Router, private cookies: CookieService) { }

  ngOnInit(): void {
    
    if (this.cookies.check("token")) {
      this.router.navigateByUrl('/home');
    }

  }

  onConsultaLogin(){
    console.log(this.ngPhone);
    console.log(this.ngPass);
    if(this.ngPhone !== "" || this.ngPass !== ""){
      this.consultLogin.consultLogin({
        phone: this.ngPhone,
        password: this.ngPass
      }).subscribe(
        (data: any) => {
          this.consultLogin.setToken(JSON.stringify(data['user']));
          this.router.navigateByUrl('/home');
        },
        (error) => {
          this.login = error;
          this.message = "telefono o contraseña incorrecta";
        }
      )
    }
    else {
      this.message = "Por favor, ingresa tu informacion de acceso";
    }

  }

}
