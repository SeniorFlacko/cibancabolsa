import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private ls: LoginService) { 
    this.createForm();
  }

  ngOnInit() {
  }


  createForm() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  onSubmit(){
    this.user = this.loginForm.value;
    this.ls.login(this.user)
      .subscribe(response => console.log("Log ", response));
  }
}