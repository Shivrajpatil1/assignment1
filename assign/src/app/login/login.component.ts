import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from '../common/common-api-call.service';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, public commonapicallService: CommonApiCallService,
    private http: HttpClient) { }
  ngOnInit() {

    this.login();
  }

  login() {
    this.loginForm = this.fb.group({

      email: [''],
      password: [''],

    })
  
        
  }

  submit() {
    const Email = this.loginForm.value.email;
    const Password = this.loginForm.value.password;

    this.http.get<any[]>(`http://localhost:3000/users?email=${Email}&password=${Password}`)

      .subscribe(Users => {
        // if (Users.length === 1) {
          console.log(Users)
         this.commonapicallService.username= Users[0].userName;
          this.router.navigateByUrl('dashboard')

        // }
      })
     
        

        
  }
}





