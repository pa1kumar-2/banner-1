import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  viewBanner: string = 'banner-2';

  banners: string[] = [
    "banner-1",
    "banner-2",
    "banner-3",
    "banner-4",
    "banner-5"
  ]

  changeBanner(event: any) {
    this.viewBanner = event.target.value;
  }

}
