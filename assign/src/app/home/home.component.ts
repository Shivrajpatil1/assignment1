import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private router :Router){}
login(){ this.router.navigateByUrl('/login')}
dashboard(){this.router.navigateByUrl('/dashboard')}
userform(){this.router.navigateByUrl('/userform')}
signup(){this.router.navigateByUrl('/signup')}
}
