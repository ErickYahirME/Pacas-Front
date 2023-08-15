import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs';
import { GenereAdminService } from 'src/app/service/admin-Service/genere-admin.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-edit-genere',
  templateUrl: './edit-genere.component.html',
  styleUrls: ['./edit-genere.component.css']
})
export class EditGenereComponent {

  constructor(
    private fb: FormBuilder,
    private GenereAdminService: GenereAdminService,
    private router: Router,
    private sweetS: SweetAlertService,
    private actR : ActivatedRoute ,
  ) { }


  sex: any = [];
  genero: Object [] = [];


  generoForm: FormGroup = this.fb.group({
    sex: ['', [Validators.required, Validators.minLength(1)]],
  });


  ngOnInit(): void {
    // this.actR.params.subscribe(idd =>{
    //   console.log('este id usare para editar',idd)
    // })
    const id = parseInt(this.actR.snapshot.paramMap.get('id') || '');
    this.GenereAdminService.getGenereById(id).subscribe((gen: any)=>{
      this.generoForm.setValue({
        sex: gen.sex
      })
    });
  }


  updateGen() {
    const id = parseInt(this.actR.snapshot.paramMap.get('id') || '');
    this.GenereAdminService.updateGenere(id, this.generoForm.value).pipe(
      switchMap(() => this.router.navigateByUrl('/admin-crud/crudGenere'))
    ).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error('Este es el: ', error)
    });
    this.getAllGenere();
    this.sweetS.success('Genero actualizado');
    this.router.navigateByUrl('/admin-crud/crudGenere');
  }


  getAllGenere() {
    this.GenereAdminService.getGenere()
      .pipe(
        catchError((error) => {
          console.error(error);
          // manejar el error aquí, por ejemplo, mostrar un mensaje al usuario
          return [];
        })
      )
      .subscribe((gen: {}) => {
        this.sex = gen;
        console.log(gen);
 
      });
  }
}