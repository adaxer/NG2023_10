import { TestBed } from '@angular/core/testing';
import { MovieService } from './movie.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Environment } from '../environments/environment';
import { Movie } from '../models/movie';
import { MovieInfo } from '../models/movieInfo';

describe('MovieService', () => {
    let service: MovieService;
    let httpMock: HttpTestingController;
    let mockEnv: Partial<Environment>;

    beforeEach(() => {
        mockEnv = { apiBaseUrl: 'http://mock-api-url.com' };

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                { provide: Environment, useValue: mockEnv }
            ]
        });

        service = TestBed.inject(MovieService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify(); // Ensure that no unmatched requests are outstanding
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch movies list', (done: DoneFn ) => {
        const mockMoviesInfo: MovieInfo[] = [
            { id: 1, info: "Movie 1" },
            { id: 2, info: "Movie 2" }
        ];

        service.getMovies().subscribe(data => {
            expect(data.length).toBe(2);
            expect(data).toEqual(mockMoviesInfo);
            done();
        });

        const req = httpMock.expectOne(`${mockEnv.apiBaseUrl}/movie/list`);
        expect(req.request.method).toBe('GET');
        req.flush(mockMoviesInfo);
    });

    it('should fetch movie details by id', (done: DoneFn) => {
        const mockMovie: Movie = {
            id: 1,
            title: "Movie 1",
            director: "Director",
            released: new Date("1982-06-25")
        };

        service.getDetails(1)!.subscribe(data => {
            expect(data).toEqual(mockMovie);
            done();
        });

        const req = httpMock.expectOne(`${mockEnv.apiBaseUrl}/movie/1`);
        expect(req.request.method).toBe('GET');
        req.flush(mockMovie);
    });
});
