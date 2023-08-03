import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenereAdminService } from 'src/app/service/admin-Service/genere-admin.service';

@Component({
  selector: 'app-genere',
  templateUrl: './genere.component.html',
  styleUrls: ['./genere.component.css']
})
export class GenereComponent {

  constructor(
    private fb: FormBuilder,
    private GenereAdminService: GenereAdminService,
    private Router: Router, 
  ) { }

  productoForm : FormGroup = this.fb.group({
    sex: ['', [Validators.required, Validators.minLength(1)]],
  });


  save(){
    console.log('sirve',this.productoForm);
    this.GenereAdminService.addGenere(this.productoForm.value).subscribe(data =>{
      console.log(data, 'respuesta');
    })
  }

  

}
