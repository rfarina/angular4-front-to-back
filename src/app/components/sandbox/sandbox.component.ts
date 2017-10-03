import { Component } from '@angular/core';


@Component({
    selector: 'sandbox',
    template:`
    <!-- Using Pipes (formatting) -->
    <h2>Hello from Sandbox</h2>
    <p>My birthday is {{ birthday }}</p>
    <p>My formatted birthday using date is {{ birthday | date }}</p>
    <p>My formatted birthday using date:"MM-dd-yy" is {{ birthday | <p>My formatted birthday using date:"MM-dd-yyyy" is {{ birthday | date:"MM-dd-yyyy" }}</p>
    
    <hr>
    <!-- Uppercase and Lowercase -->
    <p>not formatted 'cake' I love {{ 'cake' }} </p>
    <p>formatted 'cake' to uppercase:  I love {{ 'cake' | uppercase }} </p>
    <p>formatted 'CAKE' to lowercase:  I love {{ 'CAKE' | lowercase }} </p>

    <hr>
    <!-- Currency -->
    <p>You're unformatted total of {{ total }} is {{ total }} </p>
    <p>You're formatted total of {{ total }} is   {{ total | currency }} </p>
    <p>You're formatted total of {{ total }} in GBP is   {{ total | currency:"GBP" }} </p>
    <p>You're formatted total of {{ total }} in GBP w/Symbol is   {{ total | currency:"GBP":"1" }} </p>
    
    <!-- Percent -->
    <p>You're unformatted fee of {{ fee }} is {{ fee }} </p>
    <p>You're formatted fee of {{ fee }} as % is {{ fee | percent }} </p>
    
    `
})

export class SandboxComponent {

    birthday = new Date(1981, 1, 15);
    total: number = 500;
    fee: number = 0.5;
    constructor() {

    }

} // end class


