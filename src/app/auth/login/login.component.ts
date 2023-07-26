import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login, userGeneral, userResponse } from '../../interface';
import { ToolsService } from 'src/app/service/tools.service';
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
    private toolS: ToolsService
  ) { }

  loginForm : FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  login(){
    this.authS.login(this.loginForm.value).subscribe((data:userResponse) => {
      console.log(data.user, 'resultado');
      if(data){
        this.toolS.setToken(data.access_token);
        this.router.navigateByUrl('/home');
      }

    });
  }

}
