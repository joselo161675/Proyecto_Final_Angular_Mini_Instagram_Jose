import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDataService } from '../services/post-data.service';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  selectedImageId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedImageId = +params['imageId'] || null;  
    });
  }

  getImageUrl(width: number = 404, height: number = 404): string {
    if (this.selectedImageId !== null) {
      return `https://picsum.photos/${width}/${height}`;
    } else {
      return `https://picsum.photos/${width}/${height}`;
    }
  }

   getImageDescription(): string {
    if (this.selectedImageId !== null) {
      return `Descripción de la imagen con ID ${this.selectedImageId}`;
    } else {
      return 'No hay ID de imagen seleccionado para obtener una descripción.';
    }
  }
}
