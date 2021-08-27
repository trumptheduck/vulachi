import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  serial:string="";
  password:string="";
  constructor(private Auth: AuthService,private _snackBar: MatSnackBar) {
  }
  login() {
    this.Auth.signin({credential:this.serial,password:this.password});
  }
  ngOnInit(): void {
    this.Auth.getAuthListener().subscribe({next: (isLoggedIn)=>{
      if (!isLoggedIn) {
        this._snackBar.open("CCCD/Password sai","",{
          duration: 1000
        });
      }
    }})
  }
}
