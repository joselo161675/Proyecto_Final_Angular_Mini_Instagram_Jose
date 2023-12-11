import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  selectedImageId: number | null = null;
  @Input()
  post: any = {}
  @Input()
  postId!: string;
  image: string = ""


  ngOnInit() {
    console.log("post", this.post)
    if (!!this.post.images.length) {
      this.image = this.post.images[0]
    } else {
      this.image = this.post.video[0]
    }
  }

  getImageUrl(width?: number, height?: number): string {
    if (this.selectedImageId !== null) {
      return `https://picsum.photos/${width}/${height}`;
    } else {
      return `https://picsum.photos/${width}/${height}`;
    }
  }
}
