import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../service/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private router: Router, public authSvc: Login) { }

  ngOnInit(): void {
  }

  irhome(){
    this.router.navigate(['home', this.authSvc.user]);
  }

}
