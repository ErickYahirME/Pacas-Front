import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { SweetAlertService } from '../../service/sweet-alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private authS: AuthService,
    private sweetA: SweetAlertService,
    private route: Router
  ){}

  OptionRol:any = this.getRol();

  ngOnInit() {

  }
  logout(){
    //implementar sweetAlert para la confirmación
    this.sweetA.confirm('¿Estas seguro de cerrar sesión?','¡Cerrar sesión!').then( (result) => {
      if(result.isConfirmed){
        this.sweetA.success('Sesión cerrada correctamente');
        this.authS.logout().subscribe();
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('rol');
        this.route.navigateByUrl('/login');
      }
  })
}

async getRol(){
  const rol = await localStorage.getItem('rol');
  // console.log('rol para definir la opción',rol);
  return rol;
}
}
