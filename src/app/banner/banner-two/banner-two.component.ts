import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-two',
  templateUrl: './banner-two.component.html',
  styleUrls: ['./banner-two.component.scss']
})
export class BannerTwoComponent {


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
