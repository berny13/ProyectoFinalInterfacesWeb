import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Login } from '../service/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    contraseña: new FormControl(''),
    contraseña1: new FormControl('')
  });

  constructor(private autSvc: Login) { }

  ngOnInit(): void {
  }

  onLogin(){
    const {email, contraseña} = this.loginForm.value;
    this.autSvc.login(email, contraseña);
    
  }

}
