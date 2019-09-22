import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {
  public arrayBiblioL:Array<any>;
  public getValue;
  public libro:Array<any>;

  constructor(
    private route: ActivatedRoute
  ) {
    this.arrayBiblioL = [{
      id: 0,
      titulo: "La Colmena",
      autor: "Camilo José Cela Trulock",
      anno: 1951,
      editorial:'anónimo',
      sinopsis:'seguramente la obra más valiosa de Camilo José Cela, es un testimonio fiel de la vida cotidiana en las calles, cafés y alcobas de aquel Madrid de 1943, pero es también una amarga crónica existencial. Un aire de rutina y fatalidad ha invadido la conciencia de las gentes.'
    }, {
      id: 1,
      titulo: "La Galatea",
      autor: "Miguel de Cervantes Saavedra",
      anno: 1585,
      editorial:'anónimo',
      sinopsis: 'Hay una trama principal y varias secundarias. En la principal, Elicio y Erastro son dos pastores enamorados de Galatea, una hermosísima pastora que reúne todas las demás virtudes de las heroínas cervantinas: discreción (es decir, inteligencia y buen juicio), honestidad, bondad.'
    }, {
      id: 2,
      titulo: "Don Quijote",
      autor: "Miguel de Cervantes Saavedra",
      anno: 1605,
      editorial:'anónimo',
      sinopsis:'El ingenioso hidalgo don Quijote de la Mancha narra las aventuras de Alonso Quijano, un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo ser un caballero andante, nombrándose a sí mismo como don Quijote de la Mancha.'
    },
    {
      id: 3,
      titulo: "La Dorotea",
      autor: "Félix Lope de Vega y Carpio",
      anno: 1632,
      editorial:'anónimo',
      sinopsis:'«La Dorotea» (1632) es la gran obra narrativa de Lope de Vega, en la que un Lope septuagenario rememora sus amores casi adolescentes con Elena Osorio y cuya estructura es la de «La Celestina» en un claro homenaje a Fernando de Rojas.'
    },
    {
      id: 4,
      titulo: "La Dragontea",
      autor: "Félix Lope de Vega y Carpio",
      anno: 1602,
      editorial:'anónimo',
      sinopsis:'«La Dragontea» ocupa un lugar de importancia en la carrera literaria de Lope. Con esta epopeya sobre la muerte de Sir Francis Drake y sobre las inmortales gestas de algunos valientes españoles que combatieron los ataques del sanguinario inglés, el poeta madrileño intenta inscribirse en la nómina de poetas prestigiosos de la época.'
    }];
    this.getValue = "";
    this.libro = new Array;
  }

  ngOnInit() {
    this.getValue = this.route.snapshot.paramMap.get('id'); 
    this.libro = this.obtenerLibro(this.getValue);
   
  }

  obtenerLibro(id){
    let libro;
    libro = this.arrayBiblioL.find(valor => valor.id == id);
    return libro;
  }

}
