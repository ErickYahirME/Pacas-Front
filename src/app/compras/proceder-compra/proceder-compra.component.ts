import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { ToolsService } from 'src/app/service/tools.service';
import { ProductService } from '../../service/product.service';
import { forkJoin, Observable, of } from 'rxjs';
import { SweetAlertService } from '../../service/sweet-alert.service';
import { catchError, switchMap } from 'rxjs/operators'; // Importa los operadores necesarios
import { Router } from '@angular/router';
import { ServiceAdressService } from '../../service/service-adress.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForeignKeysService } from '../../service/foreign-keys.service';
import { ComprasServiceService } from 'src/app/service/compras-service.service';


@Component({
  selector: 'app-proceder-compra',
  templateUrl: './proceder-compra.component.html',
  styleUrls: ['./proceder-compra.component.css']
})
export class ProcederCompraComponent {
  cart: any = [];
  idUser:any = this.toolS.getIdUser();
  bool:boolean = false;
  adress:any = [];
  isAddressExpanded: boolean = false;

  packages: any = [];

  toggleAddress() {
    this.isAddressExpanded = !this.isAddressExpanded;
  }
  constructor(
    private cartS: CartService,
    private toolS: ToolsService,
    private productS: ProductService,
    private sweetS: SweetAlertService,
    private router: Router,
    private adressS: ServiceAdressService,
    private fb: FormBuilder,
    private foreignS: ForeignKeysService,
    private compras: ComprasServiceService
  ) {}

  ngOnInit() {
    this.getCart();
    this.getAdressByUser();
    this.getPackages();
  }

  async getCart(){
    this.cartS.getCartByIdUser(this.idUser).subscribe( response => {
      console.log('response',response);
      this.cart = response;
    }, err => console.log(err));
  }

  async getPackages(){
    this.foreignS.getPackages().subscribe( response => {
      console.log('response',response);
      this.packages = response;
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

  //boton change que por cada click cambia el valor de bool
  change(){
    this.bool = !this.bool;
  }


  pagar() {

    this.sweetS.confirm('¿Estás seguro de que quieres realizar la compra?', 'Comprar')
    .then((result) => {
      if (result.isConfirmed) {

        const cartItems = this.cart;

    const updateRequests: Observable<any>[] = [];

    for (const item of cartItems) {
      const productId = item.product_id;
      const quantity = item.quantity;

      const updateRequest = this.productS.getProductById(productId).pipe(
        switchMap((product: any) => {
          const updatedProduct = { ...product, stock: product.stock - quantity };
          delete updatedProduct.author_id;
          delete updatedProduct.image;
          console.log('Producto actualizado:', updatedProduct);
          return this.productS.updateProduct(productId, updatedProduct);
        }),
        catchError((error) => {
          console.error('Error al actualizar el producto:', error);
          return of(null);
        })
      );

      updateRequests.push(updateRequest);
    }

    // Realizar todas las peticiones de actualización en paralelo
    forkJoin(updateRequests).subscribe(
      (results: any) => {
        console.log('Stock actualizado:', results);


        // 'price',
        // 'quantity',
        // 'user_id',
        // 'paqueteria',
        // 'status',
        // 'address_id',
        const purchasedProducts = cartItems.map((item:any) => {
          return {
            price: item.price,
            quantity: item.quantity,
            product_id: item.product_id,

          };
        });



        const purchaseData = {
          products: purchasedProducts,
          user_id: this.idUser,
          paqueteria: this.bool ? 'Fedex' : 'DHL',
          status: 'En proceso',
          address_id: this.adress[0].id,
        };

        console.log('Datos de la compra que se guardaran:', purchaseData);
        this.cartS.clearCart(this.idUser).subscribe(
          () => {
            this.compras.addPurchaseWithProducts(purchaseData).subscribe( (response:any )=> {
              console.log('response',response);
            }, err => console.log(err));

            console.log('Carrito vaciado');
            this.sweetS.fireToastSuccess('Compra realizada con éxito');
            this.router.navigate(['/compras/carrito']);
          },
          (error) => {
            console.error('Error al vaciar el carrito:', error);
          }
        );
      },
      (error: any) => {
        console.error('Error al actualizar el stock:', error);
        // Manejar errores si es necesario
      }
    );
      }
    });
  }


  addressForm : FormGroup =this.fb.group({
    calle: ['', Validators.required],
    numExt: ['', Validators.required],
    numInt: ['', Validators.required],
    colonia: ['', Validators.required],
    municipio : ['', Validators.required],
    estado: ['', Validators.required],
    pais: ['', Validators.required],
    codigoPostal: ['', Validators.required],
    idUser: [this.idUser],
    nombreCompleto: ['', Validators.required],
  });


  addressAdd(){
    console.log(this.addressForm.value, 'addressForm');
    this.adressS.addAdress(this.addressForm.value).subscribe( (response:any )=> {
      console.log('response',response);
      this.sweetS.fireToastSuccess('Dirección agregada con éxito');
      this.getAdressByUser();
      // this.getCart();
    }, err =>
    console.log(err));

  }


  async getAdressByUser(){
    this.adressS.getAdressByIdUser(this.idUser).subscribe( (response:any) => {
      this.adress = response;
      console.log('address',this.adress);
      // this.addressForm.patchValue(response);
    }, err => console.log(err));
  }

  collapseStates: { [key: string]: boolean } = {};


  toggleCollapse(index: string) {
    this.collapseStates[index] = !this.collapseStates[index];
  }

  selectedAddress: any = null;
  selectedAddressCollapsed: boolean = true;

  toggleSelectedAddressCollapse() {
    this.selectedAddressCollapsed = !this.selectedAddressCollapsed;
  }

  toggleAddressCollapse(index: number) { // Cambiar el tipo de índice a number
    this.collapseStates['addressCollapse-' + index] = !this.collapseStates['addressCollapse-' + index];
  }

  selectAddress(addressId: number) {
    // Aquí puedes guardar el ID de la dirección seleccionada
    // y luego obtener los detalles de esa dirección si es necesario
    // También puedes mostrar la dirección en la parte seleccionada
    this.selectedAddress = this.adress.find((address:any) => address.id === addressId);
    this.selectedAddressCollapsed = false; // Mostrar la dirección seleccionada
  }

}
