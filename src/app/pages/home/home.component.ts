import { Component, OnInit } from '@angular/core';
import { ConsultService } from "../../services/consult.service";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(public consultLogin: ConsultService, public router: Router, private cookies: CookieService) { }

  user: any;

  ngOnInit() {
    this.consultLogin.getLogged();

    if (this.cookies.check("token") === false) {
      this.router.navigateByUrl('/login');
    }
    
    this.consultLogin.getLogged();
    this.user = JSON.parse(this.consultLogin.getToken());
  }

  logout(){
    this.cookies.delete("token");
    this.router.navigateByUrl('/login');
  }

}
