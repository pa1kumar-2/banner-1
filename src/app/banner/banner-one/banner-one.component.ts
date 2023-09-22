import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-banner-one',
  templateUrl: './banner-one.component.html',
  styleUrls: ['./banner-one.component.scss']
})
export class BannerOneComponent {

  viewBanner: string = 'banner-1';

  banners: string[] = [
    "banner-1",
    "banner-2",
    "banner-3",
    "banner-4",
    "banner-5"
  ]


  constructor(private formBuilder: FormBuilder) { }


  bannerForm = this.formBuilder.group({
    name: ['NEW ARRIVAL'],
    product_name: ['.5 INCH PORTABLE HD MONITOR DC-550 PRO'],

    background_image_url: ['assets/images/bg-cover.png'],
    product_image_url: ['https://assets.hyperinvento.com/hyperinventory_admin/assets/images/creative-template-images/VILTROX+5.5+INCH+Portable+HD+Monitor+DC-550+Pro.png'],
    logo_url: ['https://assets.hyperinvento.com/hyperinventory_admin/assets/images/creative-template-images/VILTROX-logo.png'],
    price: ['$18,890'],
    selling_price: ['$18,000'],
    button_text: ['Shop Now'],
    discount_percentage: ['12']
  })


  changeBanner(event: any) {
    this.viewBanner = event.target.value;
  }

}
