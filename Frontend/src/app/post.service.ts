import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:3000/api/posts';
  private allPostsUrl = 'http://localhost:3000/api/all-posts'; 

  constructor(private http: HttpClient) {}

  createPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post);
  }

  getUserPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.allPostsUrl);
  }
}

