import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthGuard],
})

export class LoginComponent { 
  Login = new FormGroup({
    email : new FormControl('',[Validators.required]),
    password: new FormControl('',Validators.required)
  })
  constructor(private loginauth: AuthService, private fb: FormBuilder,private router: Router,private http:HttpClient,private authGuard: AuthGuard) {}
   loginmessage :string|undefined;
   floginmessage :string|undefined;
   passwordVisible = false;
   passwordType = 'password';
   
  ngOnInit() {}

  LoginUser() {
    this.loginauth.loginUser().subscribe((result: any) => {
        let user: any = result.find((a: any) => 
            a.email === this.Login.value.email && a.password === this.Login.value.password
        );
        
        if (!user) {
            console.log("user", user);
            if (result.findIndex((a: any) => a.email === this.Login.value.email) === -1) {
                this.floginmessage = "Email not match";
            } 
            if (result.findIndex((a: any) => a.password === this.Login.value.password) === -1) {
                if(this.floginmessage != "Email not match") {
                    this.floginmessage = "Password not match";
                } else {
                    this.floginmessage = "Email and Password not match";
                }
            }
        } else {
            console.log('Login successful');
            let cur_user = result.find((v: any) => v.email == this.Login.value.email);
            console.log('Current user:', cur_user);
            localStorage.setItem('userData', JSON.stringify(cur_user));
            this.loginmessage = "Login successfully";
            setTimeout(() => {
                this.router.navigate(["dashboard"]);
            }, 1000); 
        }    
    }); 
}

//password visibility icon
togglePasswordVisibility() {
  this.passwordVisible = !this.passwordVisible;
  this.passwordType = this.passwordVisible ? 'text' : 'password';
}

}
