import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { RoleAdminService } from 'src/app/service/admin-Service/role-admin.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-show-role',
  templateUrl: './show-role.component.html',
  styleUrls: ['./show-role.component.css']
})
export class ShowRoleComponent implements OnInit{

  constructor(
    private fb: FormBuilder,
    private roleadmin: RoleAdminService,
    private router: Router, 
    private sweetS: SweetAlertService
  ) {}
  roles: any = [];


  ngOnInit(): void {
    this.getAllRole();
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

  goToEditRole(id: number){ 
    this.router.navigateByUrl(`/admin-crud/editRole/${id}`);
    console.log('Here I go to the edit-role!');


  }

  deleteRole(id: number) { 
    this.sweetS.confirm('Estás seguro de eliminar la talla','Eliminar').then ( (result) => {
      if (result.isConfirmed){
      this.roleadmin.deleteRole(id).subscribe({
        next: () => {
          // elimina el producto de la lista de productos
          this.roles = this.roles.filter((roles: { id: number; }) => roles.id !== id);
          console.log('Product deleted...');
          this.getAllRole();
        },
        error: (error: any) => {
          console.error(error);
          // manejar el error aquí, por ejemplo, mostrar un mensaje al usuario
          console.log('Error to try to delete the product...');
        }
      });

  }
})
}

}
