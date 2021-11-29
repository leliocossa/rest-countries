import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ExportService } from 'src/app/services/export.service';
import { Country } from 'src/app/types/api';

const REGION_OPTIONS = ['Africa', 'America', 'Asia', 'Europa', 'Oceania'];
const EXPORT_OPTIONS = ['XLS', 'CSV', 'XML'];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchFilter?: string;
  source?: Country[];
  showOptions = false;
  // countries$?: Observable<Country[]>;

  regionFilter?: string;
  regionOptions = REGION_OPTIONS;

  exportType?: string;
  exportOptions = EXPORT_OPTIONS;

  constructor(private api: ApiService, private exportservice: ExportService) { }

  ngOnInit(): void {
    this.api.getAllCountries().subscribe(countries => {
      this.source = countries
    });
  }

  get countries(){
    return this.source 
      ? this.source.filter((country) =>
      this.searchFilter ? country.name.toLowerCase().includes(this.searchFilter) : country
      ).filter(country =>
        this.regionFilter
        ? country.region.includes(this.regionFilter)
        : country
        )
    : this.source;
  }
  
}
