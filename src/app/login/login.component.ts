import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, Token } from '../models/index.models';
import { Router } from '@angular/router';
import { AuthService, LoaderService } from '../services/index.services';
import { AlertComponent } from '../helpers/alert/alert.component';
import * as $ from 'jquery';
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

  @ViewChild(AlertComponent) alertComponent: AlertComponent;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private loaderService: LoaderService) {
    if(auth.isAuthenticated)
      this.router.navigate(['/home']);
     
    this.createLoginForm();
    this.createTokenForm();
    this.showtokenscreen = false;
  }

  ngOnInit() {
    // $(document).ready(function(){
    //   $(".miboton").click(function(){
    //     alert('Mi boton');
    //   });
    // });
  }


  createLoginForm() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)] ],
      password: ['', Validators.required ]
    });
  }

  createTokenForm() {
    this.tokenForm = this.fb.group({
      value: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)] ],
    });
  }

  onSubmit(){
    let user:User = this.loginForm.value;
    this.loaderService.display(true);
    this.auth.login(user)
      .subscribe(response => {
        this.loaderService.display(false);
        if(response)
          this.showTokenScreen();
        else
          this.alertComponent.show( 'Error','Usuario o contraseña incorrectos.',[],'¿Deseas continuar?');
      });
  }

  onTokenSubmit(){
    let token:Token = this.tokenForm.value;
    this.loaderService.display(true);
    this.auth.aproveToken(token)
      .subscribe(response => {
        this.loaderService.display(false);
        if (response)
          this.moveToHome();
        else
          this.alertComponent.show( 'Error','Clave dinámica incorrecta.',[],'¿Deseas continuar?');
      });
  }

  showTokenScreen(){
    this.showtokenscreen = true;
  }

  moveToHome(){
    this.router.navigate(['/home']);
  }


  filterAlpha($event){
    let alfaOnly = /^[a-zA-Z0-9\u00C1\u00E1\u00C9\u00E9\u00CD\u00ED\u00D3\u00F3\u00DA\u00FA\u00DC\u00FC\u00f1\u00D1]+$/;
    if(alfaOnly.test($event.key))
      return true
    return false;
  }
  
  pasteNumber($event) {
    return false;
  }

  filterNumber($event) {
    const keysToAccept = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab', 'Shift'];
    
    if(this.tokenForm.get('value').value.length>7){
      const keysToDeleteAccept = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab', 'Shift'];
      if(keysToDeleteAccept.indexOf($event.key) !== -1)
        return true;
      return false;
    }
    if (keysToAccept.indexOf($event.key) !== -1) {
      return true;
    }
    return false;
  }


  get name() { 
    return this.loginForm.get('name'); 
  }

  get password() { 
    return this.loginForm.get('password'); 
  }

  get token(){
    return this.tokenForm.get('value');
  }

}