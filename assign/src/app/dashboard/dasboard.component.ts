import { Component } from '@angular/core';
import { CommonApiCallService } from '../common/common-api-call.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent {
  username:any;
 constructor( public commonapicallService: CommonApiCallService){}
ngOnInit(){
  this.username=this.commonapicallService.username
}
}
