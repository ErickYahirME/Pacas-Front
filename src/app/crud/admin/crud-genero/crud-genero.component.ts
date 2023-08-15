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
    private router: Router,
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


  editGen(id: number){ 
    this.router.navigateByUrl(`/admin-crud/editGenere/${id}`);
    console.log('Here I go to the edit-genero!');
  }

}

