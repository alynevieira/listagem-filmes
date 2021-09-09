import { Component, OnInit } from "@angular/core";

import { IMovie } from "src/app/shared/interface/movie.interface";
import { MovieService } from "src/app/shared/services/movie.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})

export class MovieComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getJSON();
  }
}