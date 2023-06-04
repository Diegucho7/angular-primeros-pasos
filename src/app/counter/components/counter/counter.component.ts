import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>
Counter: {{counter}}
        </h3>
        <button (click)="increaseBy(1)">+1</button>
        <button (click)="resetFuction(10)">reset</button>
        <button (click)="decreaseBy(-1)">-1</button>
      
            `
})
// <app-counter></app-counter>
export class CounterComponent{
    constructor() { }

    public counter: number = 10;


    increaseBy (value: number): void{
    this.counter += 1;
    }
    decreaseBy(value: number): void{
      this.counter -= 1;
    }
    resetFuction(value: number): void{
      this.counter = 10;
    }
}
