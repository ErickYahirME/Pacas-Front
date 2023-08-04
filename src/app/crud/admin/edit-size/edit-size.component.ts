import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs';
import { SizeAdminService } from 'src/app/service/admin-Service/size-admin.service';

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
    private actR : ActivatedRoute 
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
    this.sizeadmin.getSizeById(id).subscribe((size: any)=>{
      this.SizeForm.setValue({
        name: size.name
      });
      console.log('This is my id: ', id);
      console.log('This is my new object: ', size);
    });
}

updatesize() {
  const id = parseInt(this.actR.snapshot.paramMap.get('id') || '');
  this.sizeadmin.updateSize(id, this.SizeForm.value).pipe(
    switchMap(() => this.router.navigateByUrl('/show-size'))
  ).subscribe({
    next: (data) => console.log(data),
    error: (error) => console.error('Este es el: ', error)
  });
  this.getAllSize();
  this.router.navigateByUrl('/show-size');
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
