import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs';
import { RoleAdminService } from 'src/app/service/admin-Service/role-admin.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private roleadmin: RoleAdminService,
    private router: Router,
    private actR : ActivatedRoute ,
    private sweetS: SweetAlertService
  ) {}
  roles: any = [];
 

  RoleForm : FormGroup = this.fb.group({
    type_role: ['', [Validators.required, Validators.minLength(1)]],
  });

  ngOnInit(): void {
    // this.actR.params.subscribe(idd =>{
    //   console.log('este id usare para editar',idd) 
    // })
    const id = parseInt(this.actR.snapshot.paramMap.get('id') || '');
    this.roleadmin.getRoleById(id).subscribe((rol: any)=>{
      this.RoleForm.setValue({
        type_role: rol.type_role
      })
    });
   
    
}

updaterole() {
  const id = parseInt(this.actR.snapshot.paramMap.get('id') || '');
  this.roleadmin.updateRole(id, this.RoleForm.value).pipe(
    switchMap(() => this.router.navigateByUrl('/admin-crud/showRole'))
  ).subscribe({
    next: (data) => console.log(data),
    error: (error) => console.error('Este es el: ', error)
  });
  this.getAllRole();
  this.sweetS.success('Rol actualizado');
  this.router.navigateByUrl('/admin-crud/showRole');
}

getAllRole() {
  this.roleadmin.getRole()
    .pipe(
      catchError((error) => {
        console.error(error);
        // manejar el error aquí, por ejemplo, mostrar un mensaje al usuario
        return [];
      })
    )
    .subscribe((roles: {}) => {
      this.roles = roles;
      console.log(roles);

    });
}



}
