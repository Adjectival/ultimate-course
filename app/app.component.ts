import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <h1 class="app">
      {{ title + '!'}}
      <p>^^ interpolate with concat</p>
      <h2>Perform some JS features on the values:
        {{ numberOne + numberTwo }}
      </h2>
      <h3>Ternary expression w/ Unicode Happiness?
        {{ isHappy ? '😂' : '🤨' }}
      </h3>
    </h1>
  `
})
export class AppComponent {
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;
  constructor() {
    this.title = 'Jacks Kicks Ass';
  }
}
