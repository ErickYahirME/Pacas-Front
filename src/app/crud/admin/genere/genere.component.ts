import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenereAdminService } from '../../../service/admin-Service/genere-admin.service';
import { Router } from '@angular/router';

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
    console.log(this.productoForm.value);
    console.log("Se guardó");
    
  }

}
