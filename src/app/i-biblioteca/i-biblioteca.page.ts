import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//Class or Models
import { Libros } from '../class/libros';

//Services
import { LibrosService } from '../services/libros.service';
import { AlertService } from '../services/alert.service';

//Other Tools
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform, LoadingController } from '@ionic/angular';
import { from } from 'rxjs';
import { finalize } from 'rxjs/operators';

import * as $ from 'jquery';


@Component({
  selector: 'app-i-biblioteca',
  templateUrl: './i-biblioteca.page.html',
  styleUrls: ['./i-biblioteca.page.scss'],
})
export class IBibliotecaPage implements OnInit {

  arrayBiblio = [];

  public error: Number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _librosService: LibrosService,
    private httpC: HttpClient,
    private nativeHttp: HTTP,
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private _alertService: AlertService
  ) {
    this.error = -1;//Si el error no existe
  }

  ngOnInit() {
    this.getLibros();
    $(document).ready(function () {
      $("ion-fab-button").click(function () {
        $(".gridSearchBar").slideToggle();
        document.querySelector('input').value = "";
      });
    });
  }

  getLibros() {
    this._librosService.getLibros().subscribe(
      result => {
        this.arrayBiblio = result['data'];
        this.error = -1;//Si el error no existe
      },
      error => {
        this.error = 1; //Si el error existe
      }
    );

  }

  doRefresh(event) {
    setTimeout(() => {
      this.getLibros();
      if (this.error === 1) {
        console.log("Error al recargar");
      }
      event.target.complete();
    }, 2000);
  }

  onChangeTime(elemento) {

    if (elemento.length == 0) {
      this._alertService.presentAlert();
    }
    else {
      var itemSeleccionado = this.arrayBiblio.forEach(function(item){
        
      console.log(item.id);
      })
     
      console.log("etrnas");
      console.log(itemSeleccionado);
      // let idB = this.arrayBiblio[i].id;
      // this._router.navigate(['i-biblioteca/libro/', idB]);
      // for (let i = 0; i < this.arrayBiblio.length; i++) 
      // {
      //   let tituloLibro = this.arrayBiblio[i].titulo.toLowerCase();
      //   if (tituloLibro.includes(elemento.toLowerCase())) {

      //   }
      // }
    }
  }

  // else {
  //   this._alertService.presentAlertNotBook();
  //   break;
  // }
  //Esto son pruebas


  // async getDataStandard() {
  //   let loading = await this.loadingCtrl.create();
  //   await loading.present();

  //   this.httpC.get('http://localhost/ionic/iBibliotecaPhp/index.php').pipe(
  //     finalize(() => loading.dismiss())
  //   )
  //     .subscribe(data => {
  //       this.data = data['results'];
  //       console.log(this.data);
  //     }, err => {
  //       console.log('JS Call error: ', err);
  //     });
  // }

  // async getDataNativeHttp() {
  //   let loading = await this.loadingCtrl.create();
  //   await loading.present();

  //   // Returns a promise, need to convert with of() to Observable (if want)!
  //   from(this.nativeHttp.get('http://localhost/ionic/iBibliotecaPhp/index.php', {}, { 'Content-Type': 'application/json' })).pipe(
  //     finalize(() => loading.dismiss())
  //   ).subscribe(data => {
  //     let parsed = JSON.parse(data.data);
  //     this.data = parsed.results;
  //     console.log(this.data);
  //   }, err => {
  //     console.log('Native Call error: ', err);
  //   });
  // }

  // getDataEverywhere() {
  //   if (this.plt.is('cordova')) {
  //     this.getDataNativeHttp();
  //   } else {
  //     this.getDataStandard();
  //   }
  // }

}
