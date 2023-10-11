import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Movie } from '../models/movie';
import { MatCardModule } from '@angular/material/card';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let mockMovieService: jasmine.SpyObj<MovieService>;
  const mockMovie: Movie = {
    id: 1,
    title: 'Blade Runner',
    director: 'Ridley Scott',
    released: new Date('1982-06-25')
  };

  beforeEach(() => {
    mockMovieService = jasmine.createSpyObj('MovieService', ['getDetails']);

    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ],
      imports: [ MatCardModule ],
      providers: [
        { provide: MovieService, useValue: mockMovieService },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(new Map([['id', '1']]))
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch movie details using the ID from route parameters', () => {
    mockMovieService.getDetails.and.returnValue(of(mockMovie));

    fixture.detectChanges(); // trigger ngOnInit

    expect(mockMovieService.getDetails).toHaveBeenCalledWith(1);
    expect(component.movie).toEqual(mockMovie);
  });

  it('should display movie details in the template', () => {
    mockMovieService.getDetails.and.returnValue(of(mockMovie));

    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('mat-card-subtitle').textContent).toContain(mockMovie.title);
    expect(compiled.querySelector('mat-card-content p').textContent).toContain(mockMovie.director);
  });

  // it('should fail', ()=> {
  //   const value = 1;
  //   expect(value).toEqual(2);
  // });
});
