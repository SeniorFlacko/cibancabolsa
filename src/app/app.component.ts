import { Component } from '@angular/core';
import { LoaderService } from './services/index.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showLoader: boolean;
  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
        this.showLoader = val;
    });
  }
}
