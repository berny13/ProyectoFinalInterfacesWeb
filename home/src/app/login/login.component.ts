import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Login } from '../service/login.service';
import { Router } from '@angular/router';



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

  constructor(private autSvc: Login, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const {email, contraseña} = this.loginForm.value;
try {
  const user = await this.autSvc.login(email, contraseña);

  if (user) {
    //redirect
    this.router.navigate(['principal']);
  }else{
    alert('usuario no existe')
  }
} catch (error) {
  console.log(error);
  
}

    
    
  }

}
