import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http
      .get('https://udemy-section-18-default-rtdb.firebaseio.com/movies.json')
      .pipe(
        catchError((error) => {
          console.error('service page showing', error);
          return throwError(error);
        })
      );
  }
}
