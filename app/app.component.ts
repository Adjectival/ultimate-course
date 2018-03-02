import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <h1 class="app">
      <img [src]="logo">
      {{ name +' '+ verb +' '+ object }}
      <img [src]="logo">
    </h1>  
      
    <h2>One-way data binding aka Property Binding with Event (Blur) Listener</h2>
    <ul>
    <input type="text" [value]="name"
      (blur)="handleBlur1($event)">
    <input type="text" [value]="verb"
      (blur)="handleBlur2($event)">
    <input type="text" [value]="object"
      (blur)="handleBlur3($event)">
    </ul>

    <h3>Ternary expression w/ Unicode Happiness?
      {{ isHappy ? '😂' : '🤨' }}
      <button>Change Happiness</button>
    </h3>
  `
})
export class AppComponent {
  title: string;
  logo: string = 'img/radioactive.svg';
  name: string = 'Jacks';
  verb: string = 'Kicks';
  object: string = 'Ass';

  handleBlur1(event: any) {
    this.name = event.target.value;
    console.log(event);
  }
  handleBlur2(event: any) {
    this.verb = event.target.value;
    console.log(event);
  }
  handleBlur3(event: any) {
    this.object = event.target.value;
    console.log(event);
  }

  isHappy: boolean = false;
  constructor() {
    this.verb = 'Kicks';
  }
}
