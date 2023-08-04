import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SizeAdminService } from 'src/app/service/admin-Service/size-admin.service';

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
  ) {}

  SizeForm : FormGroup = this.fb.group({
    size: ['', [Validators.required, Validators.minLength(1)]],
  });

  savesize() {
    if (this.SizeForm && this.SizeForm.valid) {
      const formData = {
        size: this.SizeForm.get('size')!.value
      };
      this.sizeadmin.addSize(formData).subscribe(() => {
        console.log('talla guardada');
        // resetear el formulario después de guardar
        this.SizeForm.reset();
      });
    }


  }

}
