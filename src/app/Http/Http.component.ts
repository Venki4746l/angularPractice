import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/sevices/api.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-Http',
  templateUrl: './Http.component.html',
  styleUrls: ['./Http.component.css'],
})
export class HttpComponent implements OnInit {
  movies: any[] = [];
  loading: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
  getMovies() {
    this.loading = true;
    this.apiService.getMovies().subscribe({
      next: (data: any) => {
        this.loading = false;
        console.log('moviesDta', data);
        this.movies = data;
      },
      error: (error: any) => {
        console.error('error Show in the componet', error);
      },
    });
  }
}
