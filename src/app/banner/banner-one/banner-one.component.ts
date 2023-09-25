import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import html2canvas from 'html2canvas';
// declare let html2canvas: any;
// import * as html2canvas from "html2canvas";

export enum DeviceType {
  Mobile = 'mobile',
  Desktop = 'desktop'
}
@Component({
  selector: 'app-banner-one',
  templateUrl: './banner-one.component.html',
  styleUrls: ['./banner-one.component.scss']
})
export class BannerOneComponent {

  viewBanner: string = 'banner-1';
  DeviceType = DeviceType
  banners: string[] = [
    "banner-1",
    "banner-2",
    "banner-3",
    "banner-4",
    "banner-5"
  ]

  capturedImage: any;
  constructor(private formBuilder: FormBuilder) { }

  bannerForm = this.formBuilder.group({
    badge: ['NEW ARRIVAL'],
    product_name: ['.5 INCH PORTABLE HD MONITOR DC-550 PRO'],
    desktop_background_image_url: ['assets/images/bg-cover.png'],
    mobile_background_image_url: ['assets/images/creative-mobile-bg-1.png'],
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

  createBanner(deviceType: DeviceType) {
    const desktopElement = document.querySelector("#desktopBanner") as HTMLElement;
    const mobileElement = document.querySelector("#mobileBanner") as HTMLElement;
    if (deviceType === DeviceType.Desktop && desktopElement) {

      html2canvas(desktopElement, {

        allowTaint: true, // Allow cross-origin images to taint the canvas
        useCORS: false, // Attempt to load images from a server using CORS
      }).then((canvas) => document.body.appendChild(canvas));

    }
    if (deviceType === DeviceType.Mobile && mobileElement) {

      html2canvas(mobileElement, {
        allowTaint: true, // Allow cross-origin images to taint the canvas
        useCORS: false, // Attempt to load images from a server using CORS
      }).then((canvas) =>
        document.body.appendChild(canvas)

      );
    }
  }

  downloadMobileImage() {

  }

  downloadDesktopImage() {

  }

}
