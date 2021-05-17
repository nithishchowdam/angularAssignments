import { Injectable } from '@angular/core';
import { Product } from './product/models';

@Injectable({
  providedIn: 'root'
})
export class TelevisionService {

  constructor() { }
  televisions:Product []=[
    {
      title:"Samsung",
      description:" 108 cm (43 inch) Ultra HD (4K) LED Smart TV | ₹38,999",
      image:"https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1605303289/Croma%20Assets/Entertainment/Television/Images/8940241354782.png"
    },
    {
      title:"One Plus",
      description:"Y Series 80 cm (32 inch) HD Ready LED Smart Android TV |  ₹15,999",
      image:"https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1618902373/Croma%20Assets/Entertainment/Television/Images/233053_r3oglg.png"
    },
    {
      title:"Redmi",
      description:"4A Horizon Edition 80 cm (32 inch) HD Ready LED Smart Android | ₹15,999",
      image:"https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1606073956/Croma%20Assets/Entertainment/Television/Images/9007409725470.png"
    },
    {
      title:"LG",
      description:" 139 cm (55 inch) OLED Ultra HD (4K) Smart TV | ₹1,34,999",
      image:"https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1605327183/Croma%20Assets/Entertainment/Television/Images/8956317106206.png"
    },
    {
      title:"Motorola",
      description:" ZX 164 cm (65 inch) Ultra HD (4K) LED Smart Android TV | ₹59,999",
      image:"https://rukminim1.flixcart.com/image/312/312/kingqkw0/television/w/b/y/motorola-43sauhdmq-original-imafydykpnw3hzgv.jpeg?q=70"
    },
    {
      title:"Sony",
      description:" BRAVIA X7400H 138.8 cm (55 inch) Ultra HD (4K) LED Smart TV | ₹72,999",
      image:"https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1610603169/Croma%20Assets/Entertainment/Television/Images/32W6100-01_uktndu.png"
    }
  ];
  getTvData():Product[]{
    return this.televisions
  }
}
