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
    <p>
    <input type="text" [ngModel]="name"
      (ngModelChange)="handleChange1($event)">

    <input type="text" [value]="verb"
      (blur)="handleBlur2($event)">

    <input type="text" [value]="object"
      (blur)="handleBlur3($event)">
    </p>

    <h3>Ternary expression w/ Unicode Happiness Toggle
      <span>{{ isHappy ? '😂' : '🤨' }}</span>
      <button (click)="happyBtnClick()">Change Happiness</button>
    </h3>
  `
})
export class AppComponent {
  title: string;
  logo: string = 'img/radioactive.svg';
  name: string = 'Jacks';
  verb: string = 'Kicks';
  object: string = 'Rocks';

  handleChange1(value: string) {
    this.name = value;
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
  happyBtnClick() {
    this.isHappy = !this.isHappy;
  }

  isHappy: boolean = false;
  constructor() {
    this.verb = 'Kicks';
  }
}
