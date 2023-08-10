import { Component } from '@angular/core';
import { productGET } from 'src/app/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:productGET[] = [];


  constructor(
    private productS:ProductService,
    private carritoS:CartService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  async getProducts(){
    await this.productS.getProduct().subscribe((data:productGET[]) => {
      this.products = data;
      // console.log('products get',this.products);
      console.log(data);
    });
  }


}
