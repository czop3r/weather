import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

import { WeatherService } from './weather.service';
import { Weather } from './weather-interface';

@Component({
  selector: 'app-weather-dialog',
  templateUrl: './weather-dialog.component.html',
  styleUrls: ['./weather-dialog.component.scss']
})
export class WeatherDialogComponent implements OnInit {

  selectedCityId = '1';
  date: string;
  cities: {};
  weather: Weather[];
  dayInfo: Weather;

  constructor(
    private service: WeatherService,
    private dataPipe: DatePipe,
    public dialogRef: MatDialogRef<WeatherDialogComponent>,
    ) { }

  ngOnInit() {
    this.getCities();
    this.checkDate();
    this.getWeather(this.selectedCityId);
  }

  getWeather(cityId: string): void {
    this.service.getWeather(cityId, this.date).subscribe(
      (res: Weather[]) => {
        this.weather = res;
        this.dayInfo = this.weather[0];
      },
      err => console.log(err)
    );
  }

  getCities(): void {
    this.service.getCities().subscribe(
      res => this.cities = res,
      err => console.log(err)
    );
  }

  checkDate(): void {
    const today = new Date();
    this.date = this.dataPipe.transform(today, 'yyyy-MM-dd');
  }

  selectedCity(): void {
    this.checkDate();
    this.getWeather(this.selectedCityId);
  }

  dayName(day: string): string {
    day = this.dataPipe.transform(day, 'yyyy-MM-dd');
    return (day === this.date) ? 'Today' : this.dataPipe.transform(day, 'EEEE');
  }

  close(): void {
    this.dialogRef.close();
  }

  cityName(): string {
    if (this.selectedCityId === '1') {
      return 'Katowice, K-ce';
    } else if (this.selectedCityId === '2') {
      return 'London, LDN';
    } else if (this.selectedCityId === '3') {
      return 'Sosnowiec';
    }
  }
}
