import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register(this.email, this.password).subscribe({
      next: (response) => {
        alert('Registrazione riuscita! Ora puoi effettuare il login.');
      },
      error: (err) => {
        alert('Errore nella registrazione.');
      }
    });
  }
}