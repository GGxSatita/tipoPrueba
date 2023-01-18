import { Component, OnInit } from '@angular/core';
import {AutenticarService} from './../../services/autenticar.service';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm = FormGroup;

  public name :string = '';
  public password : string = '';

  datosPerfil: any = [];

  constructor(
    public builder: FormBuilder,
    private servi : AutenticarService
  ) { }

  ngOnInit() {
    this.loginForm = builder.group({
      username: [''],
      password: [''],
    });
  }

  public autenticar(){
    this.auth.autenticar({
      ...this.loginForm.value
    })
  }

  public ingresar(){
    this.servi.autenticar({
      username : this.name,
      password : this.password
    })
  }

}
