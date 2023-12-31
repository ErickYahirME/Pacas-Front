import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { typeCloth } from 'src/app/interface';
import { ClotheAdminService } from '../../../service/admin-Service/clothe-admin.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';
import { Router } from '@angular/router';
import { GenereAdminService } from '../../../service/admin-Service/genere-admin.service';

@Component({
  selector: 'app-crud-clothe',
  templateUrl: './crud-clothe.component.html',
  styleUrls: ['./crud-clothe.component.css']
})
export class CrudClotheComponent {

  ropa: typeCloth [] = [];

  constructor(
    private fb : FormBuilder,
    private ClotheAdminService : ClotheAdminService,
    private router: Router,
    private sweetS: SweetAlertService
  ){}

  ngOnInit(): any {
    this.ClotheAdminService.getClothe().subscribe( (typCloth:any) => {
      console.log(typCloth);
      this.ropa = typCloth;
    })
  }

  deletTypeCloth(data: typeCloth){
    this.sweetS.confirm('¿Estas seguro de eliminar este tipo de ropa?','¡Eliminalo!').then ( (result) => {
      if (result.isConfirmed){
        this.sweetS.success('Tipo de prenda eliminado');
        this.ClotheAdminService.deleteClothe(data.id).subscribe ( (data) => {
          console.log('Tipo de prenda eliminado',data);
          this.ngOnInit();
        })
      }
    });
  }

  editCloth(id: number){ 
    this.router.navigateByUrl(`/admin-crud/editClothe/${id}`);
    console.log('Here I go to the edit-genero!');
  }


}
