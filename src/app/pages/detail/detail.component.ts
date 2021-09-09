import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IMovie } from "src/app/shared/interface/movie.interface";
import { MovieService } from "src/app/shared/services/movie.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})

export class DetailComponent implements OnInit {
  movie: IMovie;
  idRoute: number;

  constructor(
    private router: ActivatedRoute,
    private movieService: MovieService) {
    this.idRoute = parseInt(this.router.snapshot.params.id);
  }

  ngOnInit(): void {
    this.movie = this.movieService.getJSON().find(result => result.id === this.idRoute);
  }
}