import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <h1 class="app">
      <img [src]="logo" style="max-width:10vw;">
      {{ title }}
      <img [src]="logo" style="max-width:10vw;">
    </h1>  
      
    <input type="text" [value]="name">
    <div>{{ name }}
    </div>
    <h3>Ternary expression w/ Unicode Happiness?
      {{ isHappy ? '😂' : '🤨' }}
      <button>Happiness</button>
    </h3>
    
  `
})
export class AppComponent {
  title: string;
  logo: string = 'img/radioactive.svg';
  name: string = 'Jacks';
  isHappy: boolean = false;
  constructor() {
    this.title = 'Jacks Kicks Ass';
  }
}
