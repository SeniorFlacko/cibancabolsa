import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, Token } from '../models/index.models';
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

  loading:boolean = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    if(auth.isAuthenticated)
      this.router.navigate(['/home']);
     
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
    this.loading = true;
    this.auth.login(user)
      .subscribe(response => {
        this.loading = false;
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