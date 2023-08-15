import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenereAdminService } from 'src/app/service/admin-Service/genere-admin.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-genere',
  templateUrl: './genere.component.html',
  styleUrls: ['./genere.component.css']
})
export class GenereComponent {

  constructor(
    private fb: FormBuilder,
    private GenereAdminService: GenereAdminService,
    private router: Router, 
    private sweetS: SweetAlertService
  ) { }

  id:any;
  generoToEdit:any =[];

  generoForm : FormGroup = this.fb.group({
    sex: ['', [Validators.required, Validators.minLength(1)]],
  });

 

  save(){
    console.log('sirve',this.generoForm);
    this.GenereAdminService.addGenere(this.generoForm.value).subscribe(data =>{
      console.log(data, 'respuesta');
    })
    this.sweetS.success('Genero guardado ');
    this.router.navigateByUrl('/admin-crud/crudGenere');
  }


}
