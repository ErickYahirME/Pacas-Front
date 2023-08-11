import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleAdminService } from 'src/app/service/admin-Service/role-admin.service';

import { SweetAlertService } from 'src/app/service/sweet-alert.service';

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
    private sweetS: SweetAlertService
  ) {}

  RoleForm : FormGroup = this.fb.group({
    type_role: ['', [Validators.required, Validators.minLength(1)]],
  });

  saverole() {
    let newdata = this.RoleForm.value;
    console.log(newdata)

    this.roleadmin.addRole(newdata).subscribe(res=>{
      console.log(res);
    })
    this.sweetS.success('Rol guardado');
    this.router.navigateByUrl('/admin-crud/showRole');
    


  }


  }


