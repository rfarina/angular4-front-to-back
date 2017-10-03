import { Component, OnInit, DoCheck } from '@angular/core';


@Component({
    selector: 'sandbox',
    template:`
    <!-- ngClass directive to assign css classes to elements in template  -->
    <!-- Assign the class ".special" only if "isSpecial" === true -->
    <h4 [class.special]="isSpecial">This class is Special</h4>

    <!-- Assign multiple classes by passing in an Object with one or more properties.
         The property is the name of the class
         The value is a boolean, which determines whether the class name is to be applied -->
    <h4 [ngClass]="currentClasses">This div is initially Special and Savable</h4>

    <button (click)="toggleSpecial()">Toggle Special</button>
    <button (click)="toggleSaveable()">Toggle Saveable</button>
    `,
    styles:[
        `   .special{ 
                color: green;
            }
            h4{
                font-size:24px;
            }
            .saveable{
                text-transform:uppercase;
            }
        `
    ]
})

export class SandboxComponent implements DoCheck {
    ngDoCheck(): void {
        // Implemented to ensure that the currentClasses array is updated
        // after the underlying properies are modified. If not, the changes
        // will not be reflected in the UI.
        this.setCurrentClasses();
    }
    isSpecial: boolean = true;
    canSave: boolean = true;
    currentClasses:{};

    constructor() {
        this.setCurrentClasses();
    }

    toggleSpecial() {
        this.isSpecial = !this.isSpecial;
        // this.setCurrentClasses();
    }
    toggleSaveable() {
        this.canSave = !this.canSave;
        // this.setCurrentClasses();
    }
    setCurrentClasses() {
        this.currentClasses = {
            special: this.isSpecial,
            saveable: this.canSave
        }
        
    }



} // end class


