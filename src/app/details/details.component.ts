import { Component, OnInit } from '@angular/core';
import { DetaildataService } from '../detaildata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private detailObj:DetaildataService) { }
  detailSubscription:any;
  details:any={}

  ngOnInit(): void {
    this.detailSubscription=this.detailObj.getClientDetailData().subscribe(
      data=>{this.details=data},
      err=>{console.log("error",err)}
    )
  }
  ngOnDestroy(){
    this.detailSubscription.unsubscribe()
  }

}
