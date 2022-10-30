import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ApiResponse } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class CardRequestService {

  private envBase: string = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) { }

  getUserFilter(name?: string, specie?: string): Observable<ApiResponse> {
    const URL: string = `${this.envBase}character/?name=${name}&species=${specie}`;
    return this.http.get<ApiResponse>(URL).pipe(
      mergeMap((resp: ApiResponse) => of (resp as ApiResponse))
    );
  }

}
