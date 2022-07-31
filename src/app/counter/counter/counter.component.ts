import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>{{title}}</h1>
    <h3>La base es: {{base}}</h3>

    <button (click)="operation(base)">+{{base}}</button>
    <span>{{number}}</span>
    <button (click)="operation(-base)">-{{base}}</button>
    
    `
})
export class CounterComponent {
    title: string = 'Contador App';
    number: number = 10
    base: number = 5

    operation(param: number) {
        this.number += param;
    }






}
