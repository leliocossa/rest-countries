import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Country } from '../types/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = 'https://restcountries.com/v2'

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get<Country[]>(`${this.api}/all`);
  }

  getCountryByName(name: string) {
    return this.http
      .get<Country[]>(`${this.api}/name/${name}`)
      .pipe(map(([res]) => res));
  }

  getCountriesByName(name: string) {
    console.log(`${this.api}/alhpa?codes=${name}`);
    return this.http.get<Country[]>(
      `${this.api}/name/?${name}?fullText=true`
    );
  }
}
