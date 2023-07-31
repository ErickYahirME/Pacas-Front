import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { userGeneral } from 'src/app/interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  perfilUser:userGeneral[] = [];

  constructor(
    private authS: AuthService,
  ){
    this.authS.profileUser().subscribe((data:userGeneral[]) => {
      // console.log('datos del usuario',data);
      this.perfilUser = data;
      console.log(this.perfilUser, 'datos del usuario');
    });
  }

}
