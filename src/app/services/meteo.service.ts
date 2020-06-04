import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient: HttpClient) { }
  public getMeteoData(ville: string) {
    return this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&APPID=5c84d0fd5f8f5f45c1ae129305e8d352");
  }
}
