import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { Token } from '../models/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  tokenForm: FormGroup;
  showtokenscreen:boolean;

  constructor(private fb: FormBuilder, private ls: LoginService) { 
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
    this.ls.login(user)
      .subscribe(response => {
        console.log(response);
        if(response)
          this.showTokenScreen();
      });
  }

  onTokenSubmit(){
    let token:Token = this.tokenForm.value;
    
    this.ls.aproveToken(token)
      .subscribe(response => {
        if (response)
          this.moveToHome();
        
      });
  }

  showTokenScreen(){
    this.showtokenscreen = true;
  }

  moveToHome(){
    console.log('Ir a Home');
  }
}