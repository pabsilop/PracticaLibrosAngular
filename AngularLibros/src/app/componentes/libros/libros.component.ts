import { Component, OnInit } from '@angular/core';
import listaLibros from 'src/assets/json/libros.json';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  libros : any = listaLibros; 

  constructor() { }

  ngOnInit(): void {
  }

}
