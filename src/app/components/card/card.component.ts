import { Component, Input } from '@angular/core';
import { productGET } from 'src/app/product';
import { ToolsService } from '../../service/tools.service';
import { CartService } from 'src/app/service/cart.service';
import { SweetAlertService } from '../../service/sweet-alert.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  idUserNow:any = this.toolS.getIdUser();

  constructor(
    private toolS: ToolsService,
    private cartS: CartService,
    private sweetS: SweetAlertService
  ) {}

  ngOnInit(){
    this.loadProducts();
  }

  @Input() card: productGET[] = [];

  inCart:any = [];

  isProductInCart(product: any): boolean {
    return this.card.some(item => item.id === product.id);
  }

  iconCart: string = 'bi bi-cart';

  toggleCarrito(product: any) {
    // console.log('Agregar al carrito', product);

    this.cartS.getCartByIdUser(this.idUserNow).subscribe((response: any) => {
      const inCart = response;
      // console.log('carrito', inCart);
      const existingCartItem = inCart.find((item: any) => item.product_id === product.id);
      console.log('existe', existingCartItem);


      if (existingCartItem === undefined) {
        this.addCarrito(product);
        product.icon = 'bi bi-cart-check-fill';

      } else {
        this.removeCarrito(existingCartItem);
        product.icon = 'bi bi-cart';
      }
    });
  }


  removeCarrito(cartItem: any) {
    this.cartS.deleteCart(cartItem.id).subscribe((response: any) => {
      console.log('Producto eliminado del carrito', response);
      this.card = this.card.filter(item => item.id !== cartItem.id);
      this.sweetS.fireToastSuccess('Producto eliminado del carrito');

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
      this.sweetS.fireToastSuccess('Producto agregado al carrito');
      // Actualizar el carrito localmente (agregar el nuevo producto)
      // this.card.push({ ...product });
    }, (err: any) => {
      console.error('Error al agregar producto al carrito', err);
    });
  }


  async loadProducts() {
    this.cartS.getCartByIdUser(this.idUserNow).subscribe((response: any) => {
      const inCart = response;
      this.card = this.card.map((product: productGET) => {
        const existingCartItem = inCart.find((item: any) => item.product_id === product.id);
        if (existingCartItem === undefined) {
          product.icon = 'bi bi-cart';
        } else {
          product.icon = 'bi bi-cart-check-fill';
        }
        return product;
      });
    });
  }

}
