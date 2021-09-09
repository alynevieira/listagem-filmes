import { Injectable } from '@angular/core';

import movies from '../data/filmes.json';

@Injectable()
export class MovieService {

  public getJSON() {
    return movies;
  }
}