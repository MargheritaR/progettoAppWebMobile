import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-user-posts',
  standalone: false,
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  userPosts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getUserPosts().subscribe(posts => {
      this.userPosts = posts;
    });
  }
}
