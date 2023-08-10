import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-proceder-compra',
  templateUrl: './proceder-compra.component.html',
  styleUrls: ['./proceder-compra.component.css']
})
export class ProcederCompraComponent {
  cart: any = [];
  idUser:any = this.toolS.getIdUser();
  constructor(
    private cartS: CartService,
    private toolS: ToolsService,
  ) {}

  ngOnInit() {
    this.getCart();
  }

  async getCart(){
    this.cartS.getCartByIdUser(this.idUser).subscribe( response => {
      console.log('response',response);
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
}
