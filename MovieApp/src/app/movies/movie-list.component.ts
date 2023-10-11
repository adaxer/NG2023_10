import { Component, ViewChild, ElementRef, OnInit, signal, AfterViewInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';
import { MovieInfo } from '../models/movieInfo';
import { debounceTime, filter, fromEvent, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styles: [
  ]
})
export class MovieListComponent implements OnInit, AfterViewInit {
  busy = signal(false);

  movies: MovieInfo[] = [];
  displayedColumns: string[] = ['title', 'director', 'released'];

  searchText: string = "";

  @ViewChild('searchInput') searchInput!: ElementRef;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.busy.set(true);
    this.movieService.pageLoaded.subscribe(movies => {
      this.movies = movies;
      this.busy.set(false);
      console.log(this.movies);
    });
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        map((event:any) => event.target.value),
        switchMap(query => this.movieService.search(query))
      )
      .subscribe(results => this.movies = results);
  }

  isBusy() { return this.busy() };
}
