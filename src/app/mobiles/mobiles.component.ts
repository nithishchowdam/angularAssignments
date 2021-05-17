import { Component, OnInit } from '@angular/core';
import { Product } from '../product/models';
import {MobileService} from '../mobile.service';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobiles:Product[]=[]
  constructor(private mbObj:MobileService){

  }
  ngOnInit(){
    this.mobiles=this.mbObj.getMobileData()
  }

}