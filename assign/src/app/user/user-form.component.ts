import { Component } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
userDetails: any;
  showTable: any;
  userdetail: any;
  users:any;
  endPoint:any;

  dataById: Object | undefined;

constructor( public commonapicallService :CommonService,
  public router:Router){}

async userdetails() {
  this.showTable = !this.showTable;
  let endPoint = 'users';


   this.userdetail= await this.commonapicallService.getApiCall(endPoint).toPromise()
 console.log(this.userdetail);
 
}


async deleteRecord(id:number){     
  await this.commonapicallService.deleteApiCall('users', id).toPromise();
  
}

async edit(id: number) { 
  this.commonapicallService .id= id;
  this.dataById = await this.commonapicallService.editApiCall('users', id).toPromise();
  this.commonapicallService.dataById = this.dataById;
     this.router.navigateByUrl('signup')
  }

}
