import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fact } from 'src/models/fact';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }


  URL = 'https://catfact.ninja/facts';

  getFacts(): Observable<Fact[]> {
    return this.http.get<any>(this.URL).pipe(
      map(response => response.data),
      catchError(error => {
        return throwError(error); // From 'rxjs'
      })
    );
  }
}
