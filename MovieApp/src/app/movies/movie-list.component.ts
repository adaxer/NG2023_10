import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';
import { MovieInfo } from '../models/movieInfo';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styles: [
  ]
})
export class MovieListComponent implements OnInit {
  movies: MovieInfo[] = [];
  displayedColumns: string[] = ['title', 'director', 'released'];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(value => {
      this.movies=value;
      console.log(this.movies);
    });
  }
}
