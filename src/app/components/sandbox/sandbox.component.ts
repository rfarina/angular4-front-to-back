import { Component } from '@angular/core';


@Component({
    selector: 'sandbox',
    template:`
    <!-- Change Properties with Events -->
    <h2>Hello from Sandbox</h2>
    <h3>{{ text }}</h3>
    <input 
        type="text"
        (input)="fireEvent($event)"
        (focus)="fireEvent($event)"
        (blur)="fireEvent($event)"
        (cut)="fireEvent($event)"
        (paste)="fireEvent($event)"
        (copy)="fireEvent($event)"
        
        >

    <hr>
    <div>
        <input type="text"
        (keyup)="changeText($event)"
        placeholder="change text"
        value={{text}}
        >
    </div>
    `
})

export class SandboxComponent {
    text:string = "Hello";
    constructor() {
    }
    
    fireEvent(e) {
        console.log('event type: ', e.type);
        console.log('value: ', e.target.value);
    }

    changeText(e) {
        console.log('event type: ', e.type);
        console.log('value: ', e.target.value);
        this.text = e.target.value;
    }

} // end class


