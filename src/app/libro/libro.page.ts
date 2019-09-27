import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

//Class or Models
import { Libros } from '../class/libros';

//Services
import { LibrosService } from '../services/libros.service';

import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform, LoadingController } from '@ionic/angular';
import { from } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {
  public getValue;
  public titulo:String;
  libro = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _librosService: LibrosService,
    private httpC: HttpClient,
    private nativeHttp: HTTP,
    private plt: Platform,
    private loadingCtrl: LoadingController
  ) {
    
    this.getValue = "";
    this.titulo = "";
  }

  ngOnInit() {
    this.getValue = this._route.snapshot.paramMap.get('id'); 
    this.getLibro(this.getValue);
   
  }

  getLibro(id){
    
    this._librosService.getLibro(id).subscribe(
      result=>{
        this.libro = result['data'];
        this.titulo = this.libro['titulo'];
        console.log(this.titulo);
        
      },
      error=>{
        console.log(<any>error);
      }
    );
 
  }



}
