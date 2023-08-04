import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { productGET } from 'src/app/product';
import { ProductService } from 'src/app/service/product.service';
import { SweetAlertService } from '../../../service/sweet-alert.service';
import { ForeignKeysService } from '../../../service/foreign-keys.service';

import {NgxImageCompressService} from 'ngx-image-compress';
@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productoS: ProductService,
    private actRoute: ActivatedRoute,
    private SweetS: SweetAlertService,
    private foreignS: ForeignKeysService,
    private imageCompress: NgxImageCompressService
  ) { }

  title = 'Agregar Producto';
  titleBtn = 'Agregar'
  id:any;
  productToEdit:any =[];
  availableSizes:any  = [];
  availableClothes:any  = [];


  imgResultBeforeCompression: string = '';
  imgResultAfterCompression: string = '';

  imgResult: string = '';
  productoForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required,]],
    stock: ['', [Validators.required, ]],
    description: ['', [Validators.required, ]],
    image: [null, [Validators.required, ]],
    author_id: [localStorage.getItem('id')],
    size_id: ['', [Validators.required, ]],
    type_clothes_id: ['', [Validators.required, ]],
  });

  ngOnInit() {
    this.getSize();
    this.getClothes();

    this.actRoute.paramMap.subscribe( (params) => {
      this.id = params.get('id');
      console.log(this.id, 'este es el id');
      if(this.id == null){
        this.title = 'Agregar Producto';
        this.titleBtn = 'Agregar'
      }
      else{
        this.title = 'Editar Producto';
        this.titleBtn = 'Editar'
        this.getProductById(this.id);
      }

    } );
  }

getSize(){
  this.foreignS.getSize().subscribe(data => {
    console.log('data',data);
    this.availableSizes = data;
  })
}

getClothes(){
  this.foreignS.getTypeClothes().subscribe(data => {
    console.log('data',data);
    this.availableClothes = data;
  })
}

  get nameValidate() {
    return this.productoForm.get('name')?.invalid && this.productoForm.get('name')?.touched;
  }

  getProductById(id:any){
    this.productoS.getProductById(id).subscribe(data => {
      this.productToEdit = data;
      console.log('data',data);
      this.productoForm.patchValue({
        name: this.productToEdit?.name,
        price: this.productToEdit?.price,
        stock: this.productToEdit?.stock,
        description: this.productToEdit?.description,
        author_id: this.productToEdit?.author_id,
        size_id: this.productToEdit?.size_id,
        type_clothes_id: this.productToEdit?.type_clothes_id,
        image: this.productToEdit?.image,
      });
    })
  }


  save(){

    if (this.productoForm.valid) {
      const formData = new FormData();
      formData.append('name', this.productoForm.get('name')?.value);
      formData.append('price', this.productoForm.get('price')?.value);
      formData.append('stock', this.productoForm.get('stock')?.value);
      formData.append('description', this.productoForm.get('description')?.value);
      formData.append('image', this.productoForm.get('image')?.value);
      formData.append('author_id', this.productoForm.get('author_id')?.value);
      formData.append('size_id', this.productoForm.get('size_id')?.value);
      formData.append('type_clothes_id', this.productoForm.get('type_clothes_id')?.value);

      this.productoS.addProduct(formData).subscribe(response => {
        console.log('response',response);
        this.SweetS.success('Producto');
        this.router.navigateByUrl('/administrador-ventas/inicio-Vendedor');
      }, error => {
        console.log('error',error);
        this.SweetS.error('Error');
      });
    }
  }

  //*FUncion para las imagenes

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if(file){

    }
    this.productoForm.patchValue({
      image: file
    });
  }


//   compressFile() {
//     this.imageCompress.uploadFile().then(({image, orientation}) => {
//         this.imgResultBeforeCompression = image;
//         console.log('Size in bytes of the uploaded image was:', this.imageCompress.byteCount(image));

//         this.imageCompress
//             .compressFile(image, orientation, 50, 50) // 50% ratio, 50% quality
//             .then(compressedImage => {
//                 this.imgResultAfterCompression = compressedImage;
//                 console.log('Size in bytes after compression is now:', this.imageCompress.byteCount(compressedImage));
//             });
//     });
// }
      // compressFile() {
      //   const MAX_MEGABYTE = 2;
      //   this.imageCompress
      //       .uploadAndGetImageWithMaxSize(MAX_MEGABYTE) // this function can provide debug information using (MAX_MEGABYTE,true) parameters
      //       .then(
      //           (result: string) => {
      //               this.imgResult = result;
      //           },
      //           (result: string) => {
      //               console.error(
      //                   "The compression algorithm didn't succed! The best size we can do is",
      //                   this.imageCompress.byteCount(result),
      //                   'bytes'
      //               );
      //               this.imgResult = result;
      //           }
      //       );
      // }


      async compressFile() {
        const MAX_MEGABYTE = 2;
        const MAX_BYTES = MAX_MEGABYTE * 1000000; // Convert 2 megabytes to bytes
        let isCompressed = false;

        this.imageCompress
          .uploadAndGetImageWithMaxSize(MAX_MEGABYTE) // this function can provide debug information using (MAX_MEGABYTE,true) parameters
          .then(
            (result: string) => {
              // Check if the image is larger than the maximum allowed size
              const imageByteCount = this.imageCompress.byteCount(result);
              if (imageByteCount > MAX_BYTES) {
                // The image is larger than the allowed size, continue compressing until it's within the limit
                isCompressed = true;
                this.compressImage(result, MAX_BYTES);
              } else {
                this.imgResult = result;
              }
            },
            (result: string) => {
              console.error(
                "The compression algorithm didn't succeed! The best size we can do is",
                this.imageCompress.byteCount(result),
                "bytes"
              );
              this.imgResult = result;
            }
          );

      }

      async compressImage(imageData: string, maxBytes: number) {
        const MAX_QUALITY = 90; // Maximum quality for image compression
        let currentQuality = MAX_QUALITY;
        let compressedImageData = imageData;

        // Compress the image in a loop, reducing the quality until it's within the maxBytes limit
        while (this.imageCompress.byteCount(compressedImageData) > maxBytes && currentQuality > 0) {
          compressedImageData = await this.imageCompress.compressFile(imageData, -1, currentQuality);
          currentQuality -= 10; // Reduce the quality by 10% in each iteration
        }

        this.imgResult = compressedImageData;
      }

}
