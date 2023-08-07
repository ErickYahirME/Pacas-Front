import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { typeCloth } from 'src/app/interface';
import { ClotheAdminService } from 'src/app/service/admin-Service/clothe-admin.service';

@Component({
  selector: 'app-clothe',
  templateUrl: './clothe.component.html',
  styleUrls: ['./clothe.component.css']
})

export class ClotheComponent {

  constructor(
    private fb: FormBuilder,
    private ClotheAdminService: ClotheAdminService,
    private Router: Router,
  ){  }

  ClotForm : FormGroup = this.fb.group({
    name_clothe: ['', [Validators.required, Validators.minLength(1)]],
  });

  save(){
    console.log('esto sirve',);
    this.ClotheAdminService.addClothe(this.ClotForm.value).subscribe(data => {
      console.log(data, 'respuesta');
    });

  }

}
