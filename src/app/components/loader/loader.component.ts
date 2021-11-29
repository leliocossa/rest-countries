import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  loaderSubscription?: Subscription;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderSubscription = this.loaderService.loaderStatus.pipe(
      debounceTime(200)
    ).subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnDestroy() {
    this.loaderSubscription!.unsubscribe();
  }

}
