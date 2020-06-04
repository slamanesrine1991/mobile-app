import { Injectable } from '@angular/core';
import { Place } from '../model/location.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private locations: Array<Place> = [];
  constructor(private storage: Storage) {
    this.locations.push({ title: "lyon" });
    this.locations.push({ title: "paris" });

    this.locations.push({ title: "nabeul" });

  }

  public getLocations() {
    return this.storage.get("locations").then(data => {
      this.locations = data != null ? data : [];
      return this.locations.slice();
    });
  }
  public addLacation(place: Place) {
    this.locations.push(place);
    this.storage.set("locations", this.locations)

  }

  public updateLocation(locations) {
    this.storage.set("locations", locations)
  }
}
