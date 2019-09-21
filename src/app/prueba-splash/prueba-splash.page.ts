import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-prueba-splash',
  templateUrl: './prueba-splash.page.html',
  styleUrls: ['./prueba-splash.page.scss'],
})
export class PruebaSplashPage implements OnInit {
  showSplash = true;
  constructor() { }

  ngOnInit() {
    timer(10000).subscribe(() => this.showSplash = false);
  }

}
