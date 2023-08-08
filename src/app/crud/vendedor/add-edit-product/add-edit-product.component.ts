import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { productGET } from 'src/app/product';
import { ProductService } from 'src/app/service/product.service';
import { SweetAlertService } from '../../../service/sweet-alert.service';
import { ForeignKeysService } from '../../../service/foreign-keys.service';

import {NgxImageCompressService} from 'ngx-image-compress';
import { HttpClient } from '@angular/common/http';
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
    private imageCompress: NgxImageCompressService,
    private http: HttpClient
  ) { }

  title = 'Agregar Producto';
  titleBtn = 'Agregar'
  id:any;
  productToEdit:any =[];
  availableSizes:any  = [];
  availableClothes:any  = [];


  imgResultBeforeCompression: string = '';
  imgResultAfterCompression: string = '';

  imgResult: any;

  dataURItoBlob:any;

  productoForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required,]],
    stock: ['', [Validators.required, ]],
    description: ['', [Validators.required, ]],
    image: [null,],
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
    // console.log('data',data);
    this.availableSizes = data;
  })
}

getClothes(){
  this.foreignS.getTypeClothes().subscribe(data => {
    // console.log('data',data);
    this.availableClothes = data;
  })
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
        image: this.productToEdit?.image
      });

      const imageUrl = this.productToEdit?.image;
      if (imageUrl) {
        this.getImageFile(imageUrl).then(imageFile => {
          // Asignar la imagen convertida al formulario
          this.productoForm.patchValue({
            image: imageFile
          });

          // Llamar a la función de compresión para mostrar la imagen actual del producto
          this.compressImage(imageUrl, 200000);
        });
        // Llama a la función de compresión para mostrar la imagen actual del producto

      } else {
        // Si no hay una imagen existente, establece imgResult en null
        this.imgResult = null;
      }

    })
  }

  async getImageFile(imageUrl: string): Promise<File> {
    return fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        // Crear un objeto File a partir del Blob y asignar un nombre
        return new File([blob], "image.jpg", { type: blob.type, lastModified: Date.now() });
      });
  }


  optionBtn(){
    if(this.id == null){
      this.save();
    }
    else{
      this.update();
    }
  }

  save(){

    if (this.productoForm) {
      const formData = new FormData();
      formData.append('name', this.productoForm.get('name')?.value);
      formData.append('price', this.productoForm.get('price')?.value);
      formData.append('stock', this.productoForm.get('stock')?.value);
      formData.append('description', this.productoForm.get('description')?.value);
      formData.append('image', this.productoForm.get('image')?.value);
      formData.append('author_id', this.productoForm.get('author_id')?.value);
      formData.append('size_id', this.productoForm.get('size_id')?.value);
      formData.append('type_clothes_id', this.productoForm.get('type_clothes_id')?.value);


    // Convertir FormData a un objeto JSON
    const formDataObject:any = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Imprimir el objeto JSON en la consola
    console.log('formData para enviar:', formDataObject);

      // this.productoS.addProduct(formData).subscribe(response => {
      //   console.log('response',response);
      //   this.SweetS.success('Producto');
      //   this.router.navigateByUrl('/administrador-ventas/inicio-Vendedor');
      // }, error => {
      //   console.log('error',error);
      //   this.SweetS.error('Error');
      // });
    }
  }

  // update(){
  //   if (this.productoForm.valid) {
  //     const formData = new FormData();
  //     formData.append('name', this.productoForm.get('name')?.value);
  //     formData.append('price', this.productoForm.get('price')?.value);
  //     formData.append('stock', this.productoForm.get('stock')?.value);
  //     formData.append('description', this.productoForm.get('description')?.value);
  //     formData.append('image', this.productoForm.get('image')?.value);
  //     formData.append('author_id', this.productoForm.get('author_id')?.value);
  //     formData.append('size_id', this.productoForm.get('size_id')?.value);
  //     formData.append('type_clothes_id', this.productoForm.get('type_clothes_id')?.value);
  //     formData.append('_method', 'PUT');

  //     console.log('formData para enviar',formData);

  //     this.productoS.updateProduct(this.id, formData).subscribe(response => {
  //       console.log('DAtos que actualizas',response);
  //       this.SweetS.success('Producto Actualizado');
  //       this.router.navigateByUrl('/administrador-ventas/inicio-Vendedor');
  //     }, error => {
  //       console.log('error',error);
  //       this.SweetS.error('Error al Actualizar');
  //     });
  //   }
  // }

  async update() {
    // if (this.productoForm.valid) {
      const formData = new FormData();
      formData.append('_method', 'PUT'); // Agregar _method aquí
      formData.append('name', this.productoForm.get('name')?.value);
      formData.append('price', this.productoForm.get('price')?.value);
      formData.append('stock', this.productoForm.get('stock')?.value);
      formData.append('description', this.productoForm.get('description')?.value);
      // formData.append('image', this.productoForm.get('image')?.value);
      formData.append('author_id', this.productoForm.get('author_id')?.value);
      formData.append('size_id', this.productoForm.get('size_id')?.value);
      formData.append('type_clothes_id', this.productoForm.get('type_clothes_id')?.value);

    //validar si se selecciono una imagen nueva o no para actualizar
    const imageFile = this.productoForm.get('image')?.value;
    if (imageFile instanceof File) {
      formData.append('image', imageFile);
    }


      // const imageFile = this.productoForm.get('image')?.value;

      // if (typeof imageFile === 'string' && imageFile.startsWith('http')) {
      //   try {
      //     // Convertir la URL a un objeto Blob
      //     const response = await this.http.get(imageFile, { responseType: 'blob' }).toPromise();
      //     const blob = response as Blob;

      //     // Crear un objeto File
      //     const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
      //     formData.append('image', file);
      //   } catch (error) {
      //     console.error('Error al cargar la imagen:', error);
      //   }
      // } else if (imageFile instanceof File) {
      //   formData.append('image', imageFile);
      // }

    // Convertir FormData a un objeto JSON
    const formDataObject:any = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Imprimir el objeto JSON en la consola
    console.log('formData para enviar:', formDataObject);


      this.productoS.updateProduct(this.id, formData).subscribe(
        (response) => {
          console.log('Datos que actualizas', response);
          this.SweetS.success('Producto Actualizado');
          this.router.navigateByUrl('/administrador-ventas/inicio-Vendedor');
        },
        (error) => {
          console.log('error', error);
          this.SweetS.error('Error al Actualizar');
        }
      );
    // }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Llamamos a la función de compresión de la imagen
      this.compressImage(file, 200000); // Coloca el tamaño máximo deseado en bytes en lugar de 200000 (ejemplo: 2MB = 2000000 bytes)
    }
    // Actualizamos el valor del formulario con el archivo seleccionado
    this.productoForm.patchValue({
      image: file
    });
  }

  async compressFile(file: File) {
    const MAX_MEGABYTE = 2;
    const MAX_BYTES = MAX_MEGABYTE * 1000000; // Convertir 2 megabytes a bytes

    this.imageCompress
      .uploadAndGetImageWithMaxSize(MAX_MEGABYTE) // Permitir seleccionar una imagen y comprimir si excede el tamaño máximo
      .then(
        (result: string) => {
          // Verificar si la imagen comprimida excede el límite de tamaño
          const imageByteCount = this.imageCompress.byteCount(result);
          if (imageByteCount > MAX_BYTES) {
            // La imagen comprimida excede el límite, continuar comprimiendo hasta cumplir el límite
            this.compressImage(result, MAX_BYTES);
          } else {
            this.imgResult = result; // Establecer la URL de la imagen comprimida
            this.productoForm.patchValue({
              image: file // Asignar la imagen original al formulario
            });
          }
        },
        (result: string) => {
          console.error(
            "El algoritmo de compresión no tuvo éxito. El mejor tamaño que podemos lograr es",
            this.imageCompress.byteCount(result),
            "bytes"
          );
          this.imgResult = result; // Establecer la URL de la imagen seleccionada sin comprimir
          this.productoForm.patchValue({
            image: file // Asignar la imagen original al formulario
          });
        }
      );
  }

  // async compressImage(imageData: string | ArrayBuffer | null, maxBytes: number): Promise<void> {
    async compressImage(imageData: string | ArrayBuffer | null, maxBytes: number): Promise<void> {

  const MAX_QUALITY = 90; // Maximum quality for image compression
    let currentQuality = MAX_QUALITY;
    let compressedImageData: string | ArrayBuffer | null = imageData;

    // Compress the image in a loop, reducing the quality until it's within the maxBytes limit
    while (compressedImageData && this.imageCompress.byteCount(compressedImageData as string) > maxBytes && currentQuality > 0) {
      compressedImageData = await this.imageCompress.compressFile(compressedImageData as string, -1, currentQuality);
      currentQuality -= 10; // Reduce the quality by 10% in each iteration
    }

    if (compressedImageData) {
      // Convert the ArrayBuffer to a data URL using FileReader
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imgResult = event.target.result as string; // Set the imgResult to the data URL
      };
      reader.readAsDataURL(new Blob([compressedImageData])); // Convert ArrayBuffer to Blob and read as data URL
    }
  }




  // async compressImage(imageData: string, maxBytes: number) {
  //   const MAX_QUALITY = 90; // Calidad máxima para la compresión de la imagen
  //   let currentQuality = MAX_QUALITY;
  //   let compressedImageData = imageData;

  //   // Comprimir la imagen en un bucle, reduciendo la calidad hasta que cumpla con el límite de bytes
  //   while (this.imageCompress.byteCount(compressedImageData) > maxBytes && currentQuality > 0) {
  //     compressedImageData = await this.imageCompress.compressFile(imageData as string, -1, currentQuality);
  //     currentQuality -= 10; // Reducir la calidad en un 10% en cada iteración
  //   }

  //   this.imgResult = compressedImageData; // Establecer la URL de la imagen comprimida
  //   this.productoForm.patchValue({
  //     image: new File([compressedImageData], "compressed_image.jpg") // Asignar la imagen comprimida al formulario
  //   });
  // }

}

  //*** */
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
