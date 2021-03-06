import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrimStringExtensionFunction } from '@functions/trim-string-extension.function';
import { MoviesService } from '@services/movies/movies.service';
import { MovieModel } from '@models/movie.model';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
})
export class GridItemComponent implements OnInit {
  @Input() item;
  @Output() selectedItem = new EventEmitter<MovieModel>();

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {}

  getAlt(s) {
    return TrimStringExtensionFunction(s);
  }

  onItemSelected() {
    this.moviesService.selectMovie(this.item);
  }
}
