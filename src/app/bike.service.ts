import { Injectable } from '@angular/core';
import { Product } from './product/models';
@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor() { }
bikes:Product[]=[
  {
    title:"Yamaha Ray-ZR 125",
    description:"Ex-Showroom Price Rs. 73,550 - 79,550  125 cc | 66 kmpl | Petrol",
    image:"https://media.zigcdn.com/media/model/2020/Feb/yamaha-rayzr-125-right-side-view_360x240.jpg"
  },
  {
    title:"Royal Enfield Classic 350",
    description:"Ex-Showroom Price Rs. 1.72-1.98 Lakh 346 cc | 48 kmpl | Petrol",
    image:"https://media.zigcdn.com/media/model/2021/Feb/royal-enfield-classic-350-dual-channel_360x240.jpg"
  },
  {
    title:"Yamaha YZF R15 V3",
    description:"Ex-Showroom Price Rs. 1.49-1.68 Lakh 246 cc | 52 kmpl | Petrol",
    image:"https://media.zigcdn.com/media/model/2021/Apr/yamaha-yzf-r15-v3-red_600x400.jpg"
  },
  {
    title:"Bajaj Pulsar 150",
    description:"Ex-Showroom Price Rs. 0.99- 1.1  Lakh 150 cc | 72 kmpl | Petrol",
    image:"https://media.zigcdn.com/media/model/2020/Jun/bajaj-pulsar-150_360x240.jpg"
  },
  {
    title:"TVS Apache RTR 160",
    description:"Ex-Showroom Price Rs. 1.02-1.18 Lakh 159 cc | 68 kmpl | Petrol",
    image:"https://media.zigcdn.com/media/model/2020/Apr/rtr-160-bs6_600x400.jpg"
  },
  {
    title:"KTM 125 Duke",
    description:"Ex-Showroom Price Rs. 1.50-1.78 Lakh 123 cc | 55 kmpl | Petrol",
    image:"https://media.zigcdn.com/media/model/2020/Dec/125-duke-2021_600x400.jpg"
  }
];
getBikesData():Product[]{
  return this.bikes
}
}