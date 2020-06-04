import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contact = {
    name: "Easy Global Software",
    email: "contact@easy-global-software.fr",
    tel: "0668374633",
    logo: "assets/images/logo.png",
    location: "assets/images/location.png"
  }
  constructor() { }

}
