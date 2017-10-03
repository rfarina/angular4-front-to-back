import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'sandbox',
    template:`
    <h1>Hello 

    <!-- Basic "if" on boolean
       <span *ngIf="showName">{{ name }}</span>
       <span *ngIf="!showName">World</span>
    -->
        <!-- Basic if else using ng-template -->
        <span *ngIf="showName; else noName">{{ name }}</span>
        <ng-template #noName>World</ng-template>
 
        <!-- Basic if else using ternary operator -->
        <p>Hello {{ showName ? name : 'World' }}</p>

        <!-- Basic Switch -->
        <hr>

        <div [ngSwitch]="greeting">
            <div *ngSwitchCase="'1'">Hello World</div>
            <div *ngSwitchCase="'2'">Hi There</div>
            <div *ngSwitchCase="'3'">What's up?</div>
            <div *ngSwitchDefault>Hello</div>
            </div>
       </h1>`,
    styleUrls: ['./sandbox.component.css'] 
})

export class SandboxComponent {
    name: string = 'John Doe';
    showName: boolean = true;
    greeting:string = '3';

    constructor() {

    }
} // end class


