import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 class="">
        <img [src]="logo">
        {{ name +' '+ verb +' '+ object }}
        <img [src]="logo">
      </h1>  
        
      <h2>One-way data binding aka Property Binding with Event (Blur) Listener</h2>
      <p>
        <input type="text" #username [ngModel]="name"
        (ngModelChange)="handleChange1($event)">

        <input type="text" [value]="verb"
        (blur)="handleBlur2($event)">

        <input type="text" [(ngModel)]="object"
        >
      </p>
      
      <h3>
        <button (click)="handleRefClick(username.value)">Get 1st field Value by #ref</button>        
        {{name2}}
      </h3>

      <h3>Ternary expression w/ emoji Happiness Toggle
        <span>{{ isHappy ? '😂' : '🤨' }}</span>
        <button (click)="happyBoolClick()">Boolean Happiness</button>
      </h3>
      <h2>
          <app-grid1></app-grid1>
      </h2>
    </div>


  `
})
export class AppComponent {
  title: string;
  logo: string = 'img/radioactive.svg';
  name: string = 'Jacks';
  name2: string = 'Alex';
  verb: string = 'Eats';
  object: string = '🍜';

  handleChange1(value: string) {
    this.name = value;
    console.log(event);
  }

  handleBlur2(event: any) {
    this.verb = event.target.value;
    console.log(event);
  }
  
  handleRefClick(value: string) {
    this.name2 = value;
    console.log(value);
  }
  happyBoolClick() {
    this.isHappy = !this.isHappy;
  }

  isHappy: boolean = false;
  constructor() {
    this.verb = 'Eats';
  }
}
