import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from '../environments/environment';
import { MovieInfo } from '../models/movieInfo';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl: string = "";

  private movies: Movie[] = [
    { id: 1, title: "Blade Runner", director: "Ridley Scott", released: new Date("1982-06-25") },
    { id: 2, title: "Star Wars: A New Hope", director: "George Lucas", released: new Date("1977-05-25") },
    { id: 3, title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", released: new Date("1999-03-31") },
    { id: 4, title: "Inception", director: "Christopher Nolan", released: new Date("2010-07-16") },
    { id: 5, title: "Interstellar", director: "Christopher Nolan", released: new Date("2014-11-07") },
    { id: 6, title: "2001: A Space Odyssey", director: "Stanley Kubrick", released: new Date("1968-04-02") },
    { id: 7, title: "The Fifth Element", director: "Luc Besson", released: new Date("1997-05-09") },
    { id: 8, title: "Avatar", director: "James Cameron", released: new Date("2009-12-18") },
    { id: 9, title: "The Martian", director: "Ridley Scott", released: new Date("2015-09-30") },
    { id: 10, title: "Arrival", director: "Denis Villeneuve", released: new Date("2016-11-11") }
  ];

  constructor(private httpClient: HttpClient, env: Environment) {
    this.baseUrl = env.apiBaseUrl;
  }

  getMovies(): Observable<MovieInfo[]> {
    let result = this.httpClient.get<MovieInfo[]>(`${this.baseUrl}/movie/list`);
    return result;
  }

  getDetails(id: number): Observable<Movie> | undefined{
    let result = this.httpClient.get<Movie>(`${this.baseUrl}/movie/${id}`);
    return result;
  }


}
