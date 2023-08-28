import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm! : FormGroup;
  postResponse:any
  editId: any;
  dataById: any;
  constructor(private fb : FormBuilder,  private router : Router,  public commonapicallService :CommonService){}
  ngOnInit(){
  
      this. editId = this.commonapicallService.id;
        this. dataById = this.commonapicallService.dataById;

    this.signupForm();
  
  }
  
  signupForm(){
    this.signUpForm = this.fb.group({
      userName : [this.dataById ? this.dataById. userName:''],
      MobileNo : [this.dataById ? this.dataById.MobileNo:''],
      email:[this.dataById ? this.dataById.email:''],
      Address:[this.dataById ? this.dataById.Address:''],
      password:[this.dataById ? this.dataById.password:''],
      companies: [this.dataById ? this.dataById.companies:'']
    })
  }

  async submit(){
    this.postResponse =  await this.commonapicallService.postApiCall('users',this.signUpForm.value).toPromise()
  }
}



