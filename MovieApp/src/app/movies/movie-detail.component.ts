import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styles: [
  ]
})
export class MovieDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: MovieService) {
  }
  movie?: Movie = undefined;

  ngOnInit(): void {
    // Parameter Id rausholen;
    this.route.paramMap.subscribe(paramMap=> {
      let id = +paramMap.get("id")!;
      // Details abrufen
      this.service.getDetails(id)?.subscribe(m=>this.movie = m);
    });
  }
}
