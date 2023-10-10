import { Component, OnInit, signal } from '@angular/core';
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
  busy=signal(false);
  
  movies: MovieInfo[] = [];
  displayedColumns: string[] = ['title', 'director', 'released'];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.busy.set(true);
    this.movieService.getMovies().subscribe(value => {
      this.movies=value;
      this.busy.set(false);
      console.log(this.movies);
    });

  }

  isBusy()  {return this.busy()};
}
