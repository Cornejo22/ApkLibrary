import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  showSplash = true;

  constructor() { }

  ngOnInit() {
    timer(3000).subscribe(() => this.showSplash = false);
  }

}
