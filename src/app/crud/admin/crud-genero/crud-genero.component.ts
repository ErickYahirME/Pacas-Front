import { Component, NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Sex} from 'src/app/interface';
import { GenereAdminService } from '../../../service/admin-Service/genere-admin.service';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';


@Component({
  selector: 'app-crud-genero',
  templateUrl: './crud-genero.component.html',
  styleUrls: ['./crud-genero.component.css']
})


export class CrudGeneroComponent {

  genero: Sex [] = [];

  constructor(
    private fb : FormBuilder,
    private GenereAdminService: GenereAdminService,
    private route: Router,
    private sweetS: SweetAlertService
  ){  }

  ngOnInit(): any  {
    this.GenereAdminService.getGenere().subscribe( (sex:any) => {
      console.log(sex);
      this.genero = sex;
    })
  }

  deleteGen(data: Sex){
    this.sweetS.confirm('Estás seguro de eliminar este género','¡Eliminalo!').then ( (result) => {
      if (result.isConfirmed){
        this.sweetS.success('Género eliminado');
        this.GenereAdminService.deleteGenere(data.id).subscribe( (data) => {
          console.log('sexo eliminado',data);
          this.ngOnInit();
        }
        );
      }
    })
  }

  editGen(data: Sex){
    this.sweetS.confirm('Estas seguro de editar este género?','¡Editalo!').then ( (result) => {
      if (result.isConfirmed){
        this.route.navigate(['/admin-crud/addProduct',data.id]);
      }
    });
  }

}

