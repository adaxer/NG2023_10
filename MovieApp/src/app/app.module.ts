import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedControlsModule } from 'projects/shared-controls/src/public-api';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatCard, MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { WelcomeComponent } from './welcome.component';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail.component';
import { LedComponent } from '../../projects/shared-controls/src/lib/led.component';
import { ToUpperPipe } from './pipes/to-upper.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MovieListComponent,
    MovieDetailComponent,
    ToUpperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    SharedControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
