/* 
    Note: To use NgModel, FormsModule must be imported into app.module
*/

import { Component } from '@angular/core';


@Component({
    selector: 'sandbox',
    template:`
    <!-- Form Submission -->
    <h2>Hello from Sandbox</h2>

    <div class="container">
        <form action="Post" (submit)="formSubmit()">
            <div class="form-group">
                <label>Name</label>
                <input 
                    type="text" 
                    class="form-control"
                    [(ngModel)]="name" name="name"  >
            </div>

            <div class="form-group">
                <label>Age</label>
                <input 
                    type="number" 
                    class="form-control"
                    [(ngModel)]="age" name="age"
                    >
            </div>
            <input type="submit" value="Submit" class="btn btn-success">

            <!-- Add to list when form is submitted -->
            <ul class="list-group">
                <li *ngFor="let name of names" class="list-group-item">
                    {{ name }}
                </li>
            
            </ul>
            </form>

        <h4>{{ name }}</h4>
        <h4>{{ age }}</h4>
        </div>

    `
})

export class SandboxComponent {
    name: string = "Bob";  // two way bound
    age: number = 25;      // two way bound 
    names:string[] = ['Bob', 'John', 'Sally'];
    constructor() {
    }
    
    formSubmit() {
        console.log('form submitted');
        this.names.push(this.name);
        this.name = '';
    }

} // end class


