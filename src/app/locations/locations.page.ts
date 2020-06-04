import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';
import { Place } from '../model/location.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public locations: Array<Place>;
  constructor(private alertCtrl: AlertController, private locatonService: LocationsService, private router: Router) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.onGetLocation();
  }
  onNewLocations() {
    this.router.navigateByUrl("/menu/new-location");
  }
  async onRemove(p: Place) {
    let alert = await this.alertCtrl.create({
      // title: 'Confirmation',
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'oui',
          handler: () => {
            this.removeLocation(p);
            //  this.onGetLocation();
          }
        },
        {
          text: 'non',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }
  onGetLocation() {
    this.locatonService.getLocations().then(data => {
      this.locations = data;
    });
  }
  removeLocation(p: Place) {
    let i = this.locations.indexOf(p);
    this.locations.splice(i, 1);
    this.locatonService.updateLocation(this.locations);
  }
}
