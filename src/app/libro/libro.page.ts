import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {
  public arrayBiblioL = {};
  public getValue;
  router: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.arrayBiblioL = [{
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
    this.getValue = "";
  }

  ngOnInit() {
    this.getValue = this.navParams.get('id');
    console.log(this.getValue);
    this.obtenerLibro();
  }

  obtenerLibro(){
    
  }

}
