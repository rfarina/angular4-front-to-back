import { Component } from '@angular/core';


@Component({
    selector: 'sandbox',
    template:`
    <!-- Change Properties with Events -->
    <h2>Hello from Sandbox</h2>
    <button id="btn" 
        (click)="changeValue()"
       
        >Change Value
    </button>

    <button id="btn" 
        (click)="toggleVisibility()"
   
    >Toggle Visibility
    </button>

    <div *ngIf="value">
        <h1>{{text}}</h1>
    </div>


    `
})

export class SandboxComponent {
    text:string = 'Hello';
    value: boolean = false;

    constructor() {
    }
    
    changeValue() {
        console.log('clicked');
        this.text = "Goodbye";
    }

    toggleVisibility() {
        this.value = !this.value;
    }

} // end class


