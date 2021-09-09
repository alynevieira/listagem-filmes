import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './pages/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './shared/services/movie.service';
import { DetailComponent } from './pages/detail/detail.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    MovieComponent,
    DetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
