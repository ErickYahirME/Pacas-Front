import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SizeAdminService } from 'src/app/service/admin-Service/size-admin.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent {

  constructor(
    private fb: FormBuilder,
    private sizeadmin: SizeAdminService,
    private router: Router, 
    private sweetS: SweetAlertService
  ) {}

  SizeForm : FormGroup = this.fb.group({
    size: ['', [Validators.required, Validators.minLength(1)]],
  });

  savesize() {
    let newdata = this.SizeForm.value;
    console.log(newdata)

    this.sizeadmin.addSize(newdata).subscribe(res=>{
      console.log(res);
    })
    this.sweetS.success('Talla guardada');
    this.router.navigateByUrl('/admin-crud/showSize');
    


  }

}
