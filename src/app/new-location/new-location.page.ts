import { Component, OnInit } from '@angular/core';
import { Place } from '../model/location.model';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { LocationsService } from '../services/locations.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router, private geolocation: Geolocation, private locationService: LocationsService) { }

  ngOnInit() {
  }
  onAddLocation(data: Place) {
    data.timestamp = new Date().getTime();
    data.photo = [];
    this.geolocation.getCurrentPosition().then((res) => {
      data.coordinates = {
        longitude: res.coords.longitude,
        latitude: res.coords.latitude
      }
      this.locationService.addLacation(data);
      this.navCtrl.back();
    })
  }

}
