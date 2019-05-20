import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    userName: '',
    password: '',

  }

  constructor(private  router: Router) {
   }

  ngOnInit() {
  }
  onSubmit() {
    if(this.user.userName==='Suman' && this.user.password==='123'){
      this.router.navigate(['/home']);


    }else{
      alert('Invalid Username Or password');
    }
    console.log(this.user);
  }
}
