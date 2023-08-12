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
  perfilu:any;

  constructor(
    private authS: AuthService,
  ){
    this.authS.profileUser().subscribe((data:userGeneral[]) => {
      // this.perfilUser = data;
      this.perfilu = data;
      console.log(this.perfilu, 'datos del usuario');
    });
  }

}
