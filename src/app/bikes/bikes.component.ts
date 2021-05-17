import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { Product } from '../product/models';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit{
  constructor(private bikeObj:BikeService){

  }
  bikes:Product[]=[]
  ngOnInit()
  {
    this.bikes=this.bikeObj.getBikesData()

  }
}
