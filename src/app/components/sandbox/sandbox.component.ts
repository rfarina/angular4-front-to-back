/* 
    Note: To use NgModel, FormsModule must be imported into app.module
*/

import { Component } from '@angular/core';


@Component({
    selector: 'sandbox',
    template:`
    <!-- NgModel and 2 way binding -->
    <h2>Hello from Sandbox</h2>

    <div class="container">
        <form>
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
        </form>

        <!-- The following interpolation strings are using 2 way bound fields -->
        <h4>{{ name }}</h4>
        <h4>{{ age }}</h4>
        </div>

    `
})

export class SandboxComponent {
    name: string = "Bob";  // two way bound
    age: number = 25;      // two way bound 
    constructor() {
    }
    
} // end class


