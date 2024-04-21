import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';
import { dataSeries } from '../dataSeries';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  
  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  
  getSerieList(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }
  ngOnInit() {
    this.getSerieList();
  }
  getSeasonsAverage(): number {
  if (this.series.length === 0) {
    return 0; // Si no hay series, el promedio es 0.
  }
  
  const totalSeasons = this.series.reduce((acc, curr) => acc + curr.seasons, 0);
  return totalSeasons / this.series.length;
}

}
