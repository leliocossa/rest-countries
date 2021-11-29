import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ExportService } from 'src/app/services/export.service';
import { Country } from 'src/app/types/api';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent  implements OnInit {
  showOptions = false;
  source: Country[];

  constructor(private api: ApiService, private exportservice: ExportService) {
    this.source=[];
   }
  
  ngOnInit(): void {
    this.api.getAllCountries().subscribe(data => {
      this.source= data as Country[];
    });
  }

  @Input()
  placeholder?: string;

  @Input()
  values?: string[];

  @Input()
  value?: string;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  selectExport(value: string) {
    this.exportservice.downloadFile(this.source, 'countries', value);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}