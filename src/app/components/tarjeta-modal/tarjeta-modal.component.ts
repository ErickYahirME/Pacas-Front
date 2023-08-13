import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MethodPayServiceService } from 'src/app/service/method-pay-service.service';
import { ToolsService } from '../../service/tools.service';

@Component({
  selector: 'app-tarjeta-modal',
  templateUrl: './tarjeta-modal.component.html',
  styleUrls: ['./tarjeta-modal.component.css']
})
export class TarjetaModalComponent {

  idUser = this.toolS.getIdUser();

  constructor(
    private fb: FormBuilder,
    private methodS : MethodPayServiceService,
    private toolS: ToolsService,
  ) { }

  tarjetaForm: FormGroup = this.fb.group({
    numTarjeta: ['', Validators.required],
    nombreTitular:  ['', Validators.required],
    fechaVencimiento:  ['', Validators.required],
    cvv:  ['', Validators.required],
    idUser: this.idUser
  });
  agregarTarjeta() {
    console.log(this.tarjetaForm.value),'se enviaran';
    this.methodS.addMethodPay(this.tarjetaForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );

    // Cerrar el modal
    document.getElementById('agregarTarjetaModal')?.click();
  }

  formatoFechaVencimiento(event: any) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Remover cualquier '/' existente antes de formatear
    value = value.replace('/', '');

    if (value.length > 2) {
      // Limitar la longitud a 4 caracteres (MMYY)
      value = value.substr(0, 4);
    }

    if (value.length > 2) {
      // Insertar el '/' después de los primeros dos caracteres
      value = value.substr(0, 2) + '/' + value.substr(2);
    }

    input.value = value;
  }
}
