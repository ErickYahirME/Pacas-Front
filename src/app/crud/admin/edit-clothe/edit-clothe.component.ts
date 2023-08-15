import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClotheAdminService } from 'src/app/service/admin-Service/clothe-admin.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';
import { catchError, switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-clothe',
  templateUrl: './edit-clothe.component.html',
  styleUrls: ['./edit-clothe.component.css']
})
export class EditClotheComponent {

  constructor(
    private fb: FormBuilder,
    private ClotheAdminService: ClotheAdminService,
    private router: Router, 
    private sweetS: SweetAlertService,
    private actR : ActivatedRoute ,
  ) { }

  ropa: any = [];
  ropaS: Object [] = [];

  ClotForm : FormGroup = this.fb.group({
    name_clothe: ['', [Validators.required, Validators.minLength(1)]],
  });

  ngOnInit(): void {
    const id = parseInt(this.actR.snapshot.paramMap.get('id') || '');
    this.ClotheAdminService.getClotheById(id).subscribe((ropas: any) => {
      this.ClotForm.patchValue({
        name_clothe: ropas.ropa 
      });
    });
  }

  updateCloth() {
    const id = parseInt(this.actR.snapshot.paramMap.get('id') || '');
    this.ClotheAdminService.updateClothe(id, this.ClotForm.value).pipe(
      switchMap(() => this.router.navigateByUrl('/admin-crud/crudClothe'))
    ).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error('Este es el: ', error)
    });
    this.getAllClothes();
    this.sweetS.success('Talla actualizada');
    this.router.navigateByUrl('/admin-crud/crudClothe');
  }


  getAllClothes() {
    this.ClotheAdminService.getClothe()
      .pipe(
        catchError((error) => {
          console.error(error);
          // manejar el error aquí, por ejemplo, mostrar un mensaje al usuario
          return [];
        })
      )
      .subscribe((ropas: {}) => {
        this.ropa = ropas;
        console.log(ropas);
  
      });
  }
}
