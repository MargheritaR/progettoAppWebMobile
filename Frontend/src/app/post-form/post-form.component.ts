import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService } from '../auth.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  standalone: false,
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 })),
      ])
    ])
  ]
})
export class PostFormComponent {
  title: string = '';
  author: string = '';
  category: string = '';
  body: string = '';
  showSuccessMessage: boolean = false;  

  constructor(
    private authService: AuthService,
    private postService: PostService
  ) {}

  onSubmit() {
    console.log('Form submitted');
    console.log('Title:', this.title);
    console.log('Author:', this.author);
    console.log('Category:', this.category);
    console.log('Body:', this.body);

    if (this.authService.isLoggedIn()) {
      const post = {
        title: this.title,
        author: this.author,
        category: this.category,
        body: this.body
      };
      this.postService.createPost(post).subscribe({
        next: response => {
          console.log('Post pubblicato:', response);
          this.showSuccessMessage = true;  
          setTimeout(() => {
            this.showSuccessMessage = false;  
          }, 3000);
        },
        error: error => {
          console.error('Errore nella pubblicazione del post:', error);
        }
      });
    } else {
      console.log('Utente non autenticato. Impossibile pubblicare il post.');
    }
  }
}
