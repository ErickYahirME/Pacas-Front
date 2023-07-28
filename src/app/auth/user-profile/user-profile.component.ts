import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(
    private authS: AuthService,
  ){
    this.authS.profileUser().subscribe((data) => {
      console.log('datos del usuario',data);
    });
  }

}
