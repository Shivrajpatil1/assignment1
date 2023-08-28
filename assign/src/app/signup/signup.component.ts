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
      userName : [this.dataById ? this.dataById. userName:'',Validators.required],
      MobileNo : [this.dataById ? this.dataById.MobileNo:'',Validators.required],
      email:[this.dataById ? this.dataById.email:'',Validators.required],
      Address:[this.dataById ? this.dataById.Address:'',Validators.required],
      password:[this.dataById ? this.dataById.password:'',Validators.required],
      companies: [this.dataById ? this.dataById.companies:'',Validators.required]
    })
  }

  async submit(){
    this.postResponse =  await this.commonapicallService.postApiCall('users',this.signUpForm.value).toPromise()
  }
}



