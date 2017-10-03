import { Component } from '@angular/core';


@Component({
    selector: 'sandbox',
    template:`
    <!-- Events -->
    <h2>Hello from Sandbox</h2>
    <button id="btn" 
        (click)="fireEvent($event)"
        (mouseover)="fireEvent($event)"
        (mousedown)="fireEvent($event)"
        (mouseup)="fireEvent($event)"
        (dblclick)="fireEvent($event)"
        (drag)="fireEvent($event)"
       
        >Keyboard Event
    </button>

    <!-- Drag Events do not seem to be firing! -->
    <button id="btn2" 
        (drag)="fireEvent($event)"
        (click)="fireEvent($event)"
        
        >Drag Events
    </button>



    `
})

export class SandboxComponent {
    
    constructor() {
        
    }

    fireEvent(e) {
        e.preventDefault();
        console.log('fire Event id: ', e.target.id);
        console.log(e.type);

        // switch (e.type) {
        //     case 'click':
        //         console.log('clicked');
        //         break;
        
        //     case 'mouseover':
        //         console.log('mouseover');
        //         break;

        //     default:
        //         break;
        // }        
    }


} // end class


