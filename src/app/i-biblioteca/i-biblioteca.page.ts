import { Component, OnInit } from '@angular/core';
import { Biblioteca } from '../class/biblioteca';

@Component({
  selector: 'app-i-biblioteca',
  templateUrl: './i-biblioteca.page.html',
  styleUrls: ['./i-biblioteca.page.scss'],
})
export class IBibliotecaPage implements OnInit {
  public arrayBiblio = {};
  
  constructor(
  ) {
    this.arrayBiblio = [{
      id: 0,
      titulo: "La Colmena",
      autor: "Camilo José Cela Trulock",
      anno: 1951
    }, {
      id: 1,
      titulo: "La Galatea",
      autor: "Miguel de Cervantes Saavedra",
      anno: 1585
    }, {
      id: 2,
      titulo: "El Ingenioso Hidalgo Don Quijote",
      autor: "Miguel de Cervantes Saavedra",
      anno: 1605
    },
    {
      id: 3,
      titulo: "La Dorotea",
      autor: "Félix Lope de Vega y Carpio",
      anno: 1632
    },
    {
      id: 4,
      titulo: "La Dragontea",
      autor: "Félix Lope de Vega y Carpio",
      anno: 1602
    }];
  }

  ngOnInit() {
    console.log(this.arrayBiblio);
  }
}
