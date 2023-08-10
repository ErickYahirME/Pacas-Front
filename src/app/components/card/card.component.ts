import { Component, Input } from '@angular/core';
import { productGET } from 'src/app/product';
import { ToolsService } from '../../service/tools.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  idUserNow:any = this.toolS.getIdUser();

  constructor(
    private toolS: ToolsService,
    private cartS: CartService
  ) {}

  @Input() card: productGET[] = [];

  inCart:any = [];

  isProductInCart(product: any): boolean {
    return this.card.some(item => item.id === product.id);
  }

  iconCart: string = 'bi bi-cart';
  isCartEmpty: boolean = true;
  isCartChecked: boolean = false;
  toggleCarrito(product: any) {
    // console.log('Agregar al carrito', product);

    this.cartS.getCartByIdUser(this.idUserNow).subscribe((response: any) => {
      const inCart = response;
      // console.log('carrito', inCart);
      const existingCartItem = inCart.find((item: any) => item.product_id === product.id);
      console.log('existe', existingCartItem);
      if (existingCartItem === undefined) {
        this.addCarrito(product);
      } else {
        this.removeCarrito(existingCartItem);
      }
    });
  }

  // iconStatus(){
  //   if(inCart.find((cart:any)=> cart.product_id === card.id)){
  //     this.iconCart = 'bi bi-cart-check-fill';
  //   }
  //   else {
  //     this.iconCart = 'bi bi-cart';
  //   }
  // }

  removeCarrito(cartItem: any) {
    this.cartS.deleteCart(cartItem.id).subscribe((response: any) => {
      console.log('Producto eliminado del carrito', response);
      this.card = this.card.filter(item => item.id !== cartItem.id);
    }, (err: any) => {
      console.error('Error al eliminar producto del carrito', err);
    });
  }

  addCarrito(product: any) {
    const send = {
      user_id: this.idUserNow,
      product_id: product.id,
      quantity: 1
    };

    this.cartS.addCart(send).subscribe((response: any) => {
      console.log('Producto agregado al carrito', response);
      // Actualizar el carrito localmente (agregar el nuevo producto)
      // this.card.push({ ...product });
    }, (err: any) => {
      console.error('Error al agregar producto al carrito', err);
    });
  }


}
