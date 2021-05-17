import { Component, OnInit } from '@angular/core';
import { Product } from '../product/models';
import { TelevisionService } from '../television.service';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {

  constructor(private tvObj:TelevisionService){

  }
  televisions:Product[]=[]
  ngOnInit(){
    this.televisions=this.tvObj.getTvData()

  }
}
