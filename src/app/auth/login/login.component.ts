import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login, userGeneral, userResponse } from '../../interface';
import { ToolsService } from 'src/app/service/tools.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private fb : FormBuilder,
    private router: Router,
    private authS: AuthService,
    private toolS: ToolsService,
    private sweetS: SweetAlertService
  ) { }

  loginForm : FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  login(){
    this.authS.login(this.loginForm.value).subscribe((data:any) => {
      console.log(data.user, 'resultado');
      if(data){
        this.sweetS.success('Bienvenido');
        this.toolS.setToken(data.access_token);
        this.router.navigateByUrl('/home');
      }

    });
  }

}
