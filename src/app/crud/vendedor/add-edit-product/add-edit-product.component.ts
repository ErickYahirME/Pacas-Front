import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent {

  constructor(
    private fb: FormBuilder,
  ) { }

  productoForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required,]],
    stock: ['', [Validators.required, ]],
    description: ['', [Validators.required, ]],
    image: ['', [Validators.required, ]],
    author_id: [localStorage.getItem('author_id'), [Validators.required, ]],
    size_id: ['', [Validators.required, ]],
    type_clothes_id: ['', [Validators.required, ]],
  });


  save(){
    console.log(this.productoForm.value);
  }
}
