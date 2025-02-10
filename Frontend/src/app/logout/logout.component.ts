import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authService: AuthService) {}

  onLogout() {
    if (localStorage.getItem('token')) {
      this.authService.logout();
      alert('Logout riuscito!');
    } else {
      alert('Nessun utente è attualmente loggato.');
    }
  }
}
