import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private api: ApiService){}
  
  ngOnInit(): void {
    // this.api.getAllCountries().subscribe(res => console.log(res));
    '';
  }
  
}
