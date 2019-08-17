import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get('http://dev-weather-api.azurewebsites.net/api/city');
  }

  getWeather(cityId: string, date: string) {
    return this.http.get(`http://dev-weather-api.azurewebsites.net/api/city/${cityId}/weather?date=${date}`);
  }
}
