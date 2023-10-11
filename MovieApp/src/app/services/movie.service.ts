import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Environment } from '../environments/environment';
import { MovieInfo } from '../models/movieInfo';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
pageLoaded: Subject<MovieInfo[]> = new Subject<MovieInfo[]>();

  loadPage(page: number): void {
    this.getMovies(20, page)
  }
  baseUrl: string = "";

  constructor(private httpClient: HttpClient, env: Environment) {
    this.baseUrl = env.apiBaseUrl;
  }

  getMovies(pageSize: number = 20, page = 0): Observable<MovieInfo[]> {
    let result = this.httpClient.get<MovieInfo[]>(`${this.baseUrl}/movie/list/${pageSize}/${page}`);
    result.subscribe(l=>{
      this.pageLoaded.next(l);
    });
    return result;
  }

  getDetails(id: number): Observable<Movie> | undefined{
    let result = this.httpClient.get<Movie>(`${this.baseUrl}/movie/${id}`);
    return result;
  }


}
