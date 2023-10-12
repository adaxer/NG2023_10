import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail.component';
import { canDeactivateGuard } from './guards/can-deactivate.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent, canDeactivate: [canDeactivateGuard] },
  { path: 'movies', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo:"/welcome" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
