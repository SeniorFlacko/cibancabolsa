import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { Token } from '../models/token';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  tokenForm: FormGroup;
  showtokenscreen:boolean;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { 
    this.createLoginForm();
    this.createTokenForm();
    this.showtokenscreen = false;
  }

  ngOnInit() {
  }


  createLoginForm() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  createTokenForm() {
    this.tokenForm = this.fb.group({
      value: ['', Validators.required ],
    });
  }

  onSubmit(){
    let user:User = this.loginForm.value;
    this.auth.login(user)
      .subscribe(response => {
        console.log(response);
        if(response)
          this.showTokenScreen();
      });
  }

  onTokenSubmit(){
    let token:Token = this.tokenForm.value;
    
    this.auth.aproveToken(token)
      .subscribe(response => {
        if (response)
          this.moveToHome();
        
      });
  }

  showTokenScreen(){
    this.showtokenscreen = true;
  }

  moveToHome(){
    this.router.navigate(['/home']);
  }
}