import { Component } from '@angular/core';


@Component({
    selector: 'sandbox',
    template:`
    <!-- set style based on value of "isSpecial" -->
    <div 
        [style.font-size]="isSpecial ? '24px' : '12px' "
        [style.color]="isSpecial ? 'green' : 'black' "
        >
        This will changed based on value of "isSpecial"
    </div>
    <hr>
    <!-- ngStyle directive to assign css styles to elements in template  -->
    <div [ngStyle]="currentStyles">This will changed based on value of "currentStyles"
</div>

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

export class SandboxComponent {
    isSpecial: boolean = true;
    canSave: boolean = false;
    currentStyles = {};

    constructor() {
        this.setCurrentStyles();
    }

    setCurrentStyles() {
        this.currentStyles = {
            "color": 'red',
            "font-size": '24px',
            "display": 'block',
            "font-style": this.canSave ? 'italic' : 'normal'
        }
    }


} // end class


