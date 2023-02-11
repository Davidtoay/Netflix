import { Input } from '@angular/core';
// import { FilmsInterface, TerrorFilms } from './../films-interface';
import { Component } from '@angular/core';
import { GaleryFilms } from '../films-interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

@Input() public history!: GaleryFilms
}