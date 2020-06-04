import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menus = [
    { title: "Home", url: "/menu/home", icon: "share" },
    { title: "Méteo", url: "/menu/meteo", icon: 'snow' },
    { title: "Gallery", url: "/menu/gallery", icon: "school" },
    { title: "Locations", url: "/menu/locations", icon: "sync" },
    { title: "Logout", url: "logout", icon: "log-out" }
  ]
  constructor(private router: Router,
    private authService: AuthentificationService) { }

  ngOnInit() {
  }
  onMenuItem(m) {
    if (m.url == 'logout') {
      this.authService.logout();
      this.router.navigateByUrl("/login")
    }
    else {
      this.router.navigateByUrl(m.url)
    }
  }
}
