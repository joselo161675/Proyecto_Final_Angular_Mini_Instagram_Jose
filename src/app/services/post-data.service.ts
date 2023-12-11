import { Injectable } from '@angular/core';
import { data } from 'src/assets/data';

@Injectable({
  providedIn: 'root',
})
export class PostDataService {
  getPosts() {
    return data.results[0].posts;
  }

  getPostById(postId: number) {
    return this.getPosts().find((post: { id: number; }) => post.id === postId);
  }
}