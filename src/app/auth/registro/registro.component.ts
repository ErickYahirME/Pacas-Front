import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(
    private fb : FormBuilder,
    private router: Router,
    private authS: AuthService,
    private toolS: ToolsService,
    private sweetS: SweetAlertService
  ) { }

  registerForm : FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    sex_id: ['', [Validators.required]],
    role_id: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  
  register() {
      let newdata = this.registerForm.value;
    console.log(newdata)

    this.authS.register(newdata).subscribe(res=>{
      console.log(res);
    })
    this.sweetS.success('Bienvenido');
    this.router.navigateByUrl('/home/products');
  
    }


  }


