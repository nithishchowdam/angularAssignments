import { Injectable } from '@angular/core';
import { Product } from './product/models';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor() { }
  mobiles:Product []=[
    {
      title:"Samsung",
      description:"Galaxy M31s (Mirage Black, 6GB RAM, 128GB Storage).",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2__9BepthbPXRAZkDqouul4e16C0L3-Ww8A&usqp=CAU"
    },
    {
      title:"One Plus",
      description:"8 Pro (Onyx Black 8GB RAM+128GB Storage)",
      image:"https://trak.in/wp-content/uploads/2020/03/oneplus_8_onyx_black_4.png"
    },
    {
      title:"Redmi",
      description:"Note 9 Pro Max (Champagne Gold, 6GB RAM, 64GB Storage)",
      image:"https://m.media-amazon.com/images/I/81Ox29uGzNL._AC_SS450_.jpg"
    },
    {
      title:"Vivo",
      description:"V20 2021 Sunset Melody, 8GB RAM, 128GB Storage",
      image:"https://m.media-amazon.com/images/I/610d0YkZOtL._AC_SS450_.jpg"
    },
    {
      title:"Oppo",
      description:"F 17 Pro(Onyx Black 8GB RAM+128GB Storage)",
      image:"https://images-na.ssl-images-amazon.com/images/I/81lDF673d9L._SL1500_.jpg"
    },
    {
      title:"Apple",
      description:"iPhone 12 Mini (64GB) - White",
      image:"https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/t/h/th-iphone_12_mini_blue_pdp_image_position-1a_1.jpg"
    }
  ];
  getMobileData():Product[]{
    return this.mobiles
  }
}
