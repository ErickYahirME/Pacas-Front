import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { SizeAdminService } from 'src/app/service/admin-Service/size-admin.service';

@Component({
  selector: 'app-show-size',
  templateUrl: './show-size.component.html',
  styleUrls: ['./show-size.component.css']
})
export class ShowSizeComponent implements OnInit{

  constructor(
    private fb: FormBuilder,
    private sizeadmin: SizeAdminService,
    private router: Router, 
  ) {}
  sizes: any = [];
  

  ngOnInit(): void {
    this.getAllSize();
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

  goToEditSize(id: number){
    this.router.navigateByUrl(`/edit-size/${id}`); 
    console.log('Here I go to the edit-size!');
    

  }

  deleteSize(id: number) { 
      this.sizeadmin.deleteSize(id).subscribe({
        next: () => {
          // elimina el producto de la lista de productos
          this.sizes = this.sizes.filter((sizes: { id: number; }) => sizes.id !== id);
          console.log('Product deleted...');
          this.getAllSize();
        },
        error: (error: any) => {
          console.error(error);
          // manejar el error aquí, por ejemplo, mostrar un mensaje al usuario
          console.log('Error to try to delete the product...');
        }
      });
    
  }

}
