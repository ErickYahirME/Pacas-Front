import { Component } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { productGET } from 'src/app/product';
import {  Router } from '@angular/router';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-admin-crud',
  templateUrl: './admin-crud.component.html',
  styleUrls: ['./admin-crud.component.css']
})
export class AdminCrudComponent {

  arrayProducts: productGET[] = [];

  constructor(
    private productS : ProductService,
    private route: Router,
    private sweetS: SweetAlertService
  ) { }

  ngOnInit(){
    const authorId:any = localStorage.getItem('id');
    this.productS.getProductByAuthor(authorId).subscribe( (producstByAuthor:productGET[]) =>{
      console.log('productos del author',producstByAuthor);
      this.arrayProducts = producstByAuthor;
    } )
  }


  editProduct(data: productGET){
    this.sweetS.confirm('¿Estas seguro de editar este producto?','¡Editar!').then( (result) => {
      if(result.isConfirmed){
        this.route.navigate(['/administrador-ventas/editProduct/',data.id]);
        // this.sweetS.success('Producto editado');
        // console.log('editando',data);
      }
    })
  }

  deleteProduct(data: productGET){

    this.sweetS.confirm('¿Estas seguro de eliminar este producto?','¡Eliminar!').then( (result) => {
      if(result.isConfirmed){
        this.sweetS.success('Producto eliminado');
        this.productS.deleteProduct(data.id).subscribe( (data) => {
          console.log('producto eliminado',data);
          this.ngOnInit();
        } );
      }
    })


  }

}
