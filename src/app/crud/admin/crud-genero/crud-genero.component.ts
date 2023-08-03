import { Component, NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {sex} from 'src/app/interface';
import { GenereAdminService } from '../../../service/admin-Service/genere-admin.service';


@Component({
  selector: 'app-crud-genero',
  templateUrl: './crud-genero.component.html',
  styleUrls: ['./crud-genero.component.css']
})


export class CrudGeneroComponent {

  genero: sex [] = [];

  constructor(
    private fb : FormBuilder,
    private GenereAdminService: GenereAdminService
  ){  }

  ngOnInit(): void {
    this.GenereAdminService.getGenere().subscribe(sex => {
      console.log(sex);
      // this.genero = sex;
    });
  }

  
 
}

