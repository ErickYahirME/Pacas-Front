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

  ngOnInit() {
    // const token:any = this.toolS.getToken();
    // this.toolS.validarToken(token).subscribe((data:any) => {
    //   console.log(data, 'Valido Token')
    //   if(data.valido == true){
    //     this.router.navigateByUrl('/home/products');
    //   }
    // });

  }

  loginForm : FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  login(){

    this.authS.login(this.loginForm.value).subscribe((data:userResponse) => {
      console.log(data, 'resultado');
      if(data){
        this.sweetS.success('Bienvenido');
        this.toolS.setToken(data.token.original.access_token);
        // this.toolS.getToken();
        this.toolS.setIdUser(data.user.id);
        this.toolS.setRol(data.user.rol);
        console.log(data.user.rol, 'rol');
        this.router.navigateByUrl('/home/products');
      }


    } , (error) => {
      console.log(error, 'error');
      this.sweetS.error('Error al iniciar sesión verifique sus credenciales');
    }

    );
  }

}
