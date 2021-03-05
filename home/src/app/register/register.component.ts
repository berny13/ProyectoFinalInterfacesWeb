import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Login } from 'src/app/service/login.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    contraseña: new FormControl('')
  });
  constructor(private authSvc: Login) { }

  ngOnInit(): void {
  }

  onRegister(){
    const {email, contraseña} = this.registerForm.value;
    this.authSvc.register(email, contraseña);
    alert('se ha registrado el usuario')
    
  }

}
