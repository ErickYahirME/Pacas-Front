import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs';
import { SizeAdminService } from 'src/app/service/admin-Service/size-admin.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-edit-size',
  templateUrl: './edit-size.component.html',
  styleUrls: ['./edit-size.component.css']
})
export class EditSizeComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private sizeadmin: SizeAdminService,
    private router: Router,
    private actR : ActivatedRoute ,
    private sweetS: SweetAlertService
  ) {}
  sizes: any = [];
  productss: Object[] = [];

  SizeForm : FormGroup = this.fb.group({
    size: ['', [Validators.required, Validators.minLength(1)]],
  });

  ngOnInit(): void {
    // this.actR.params.subscribe(idd =>{
    //   console.log('este id usare para editar',idd) 
    // })
    const id = parseInt(this.actR.snapshot.paramMap.get('id') || '');
    this.sizeadmin.getSizeById(id).subscribe((talla: any)=>{
      this.SizeForm.setValue({
        size: talla.size
      })
    });
   
    
}

updatesize() {
  const id = parseInt(this.actR.snapshot.paramMap.get('id') || '');
  this.sizeadmin.updateSize(id, this.SizeForm.value).pipe(
    switchMap(() => this.router.navigateByUrl('/admin-crud/showSize'))
  ).subscribe({
    next: (data) => console.log(data),
    error: (error) => console.error('Este es el: ', error)
  });
  this.getAllSize();
  this.sweetS.success('Talla actualizada');
  this.router.navigateByUrl('/admin-crud/showSize');
}

getAllSize() {
  this.sizeadmin.getSize()
    .pipe(
      catchError((error) => {
        console.error(error);
        // manejar el error aquí, por ejemplo, mostrar un mensaje al usuario
        return [];
      })
    )
    .subscribe((sizes: {}) => {
      this.sizes = sizes;
      console.log(sizes);

    });
}



}