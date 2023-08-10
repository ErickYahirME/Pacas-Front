import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ToolsService } from '../../service/tools.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent {

  constructor(
    private cartS: CartService,
    private toolS: ToolsService,
    private router: Router
  ){}
  cart: any = [];
  idUserNow:any = this.toolS.getIdUser();
  idUser:any = this.toolS.getIdUser();
  ngOnInit(){
    this.getCart();
    // console.log(this.cart.length);
  }

  async getCart(){
    await this.cartS.getCartByIdUser(this.idUser).subscribe( response => {
      // console.log('response',response);
      this.cart = response;
    }, err => console.log(err));
  }


  calculateTotal(product: any): number {
    return product.price * product.quantity;
  }

  calculateGrandTotal(): number {
    let grandTotal = 0;
    for (const product of this.cart) {
      grandTotal += this.calculateTotal(product);
    }
    return grandTotal;
  }
  increment(product: any) {
    let idP:any = product.id;
    if (product.quantity < 999) {
      let prod = {
        // user_id: this.idUserNow,
        // product_id: product.id,
        quantity: product.quantity +1
      }
      this.updateCart(idP, prod);
      product.quantity++;
    }
  }

  decrement(product: any) {
    let idP:any = product.id;
    if (product.quantity > 1) {
      let prod = {
        // user_id: this.idUserNow,
        // product_id: product.id,
        quantity: product.quantity -1
      }
      this.updateCart(idP, prod);
      product.quantity--;
    }
  }

  procedPay(){
    this.router.navigate(['/compras/proceder-compra']);
  }
  //crear función para hacer un update de la cantidad de productos en el carrito de compras
  async updateCart(id:number, c:any){
    this.cartS.updateCart(id, c).subscribe( response => {
      // console.log('response',response);
      this.getCart();
    }, err => console.log(err));
  }


  deleteCart(c:any){
    this.cartS.deleteCart(c.id).subscribe( response => {
      // console.log('response',response);
      this.getCart();
    }, err => console.log(err));
  }
}
