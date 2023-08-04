import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleAdminService } from 'src/app/service/admin-Service/role-admin.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {

  constructor(
    private fb: FormBuilder,
    private roleadmin: RoleAdminService,
    private router: Router, 
  ) {}

  RolForm : FormGroup = this.fb.group({
    role: ['', [Validators.required, Validators.minLength(1)]],
  });

 // saverole() {
   // if (this.RolForm && this.RolForm.valid) {
     // const formData = {
       // role: this.RolForm.get('role')!.value
     // };
     // this.roleadmin.addRole(formData).subscribe(() => {
       // console.log('Rol guardado');
        // resetear el formulario después de guardar
       // this.RolForm.reset();
     // });
  //  }


 // }
  
}
