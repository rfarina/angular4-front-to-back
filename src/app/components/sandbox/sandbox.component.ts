/* 
    Note: To use NgModel, FormsModule must be imported into app.module
*/

import { Component } from '@angular/core';


@Component({
    selector: 'sandbox',
    template:`
    <!-- Template Driven Forms and Validation -->
    <h2>Hello from Sandbox</h2>

    <div class="container">
        <form novalidate #f="ngForm" action="Post" (ngSubmit)="formSubmit(f)">
            <div class="form-group">
                <label>Name</label>
                <input 
                    type="text" 
                    class="form-control"
                    #userName="ngModel" 
                    [(ngModel)]="user.name" name="name" 
                    minlength="2" 
                    required >
            </div>
            <!-- Name validations -->
            <div 
                *ngIf="userName.errors?.required && userName.touched"
                class="alert alert-danger"    
                >Name is required
            </div>

            <div 
                *ngIf="userName.errors?.minlength && userName.touched"
                class="alert alert-danger"    
                >Name should be at least 2 characters
            </div>




            <div class="form-group">
                <label>Email</label>
                <input 
                type="text" 
                class="form-control"
                #userEmail="ngModel" 
                [(ngModel)]="user.email" name="email" 
                required >
            </div>
            <!-- Email validations -->
            <div 
                *ngIf="userEmail.errors?.required && userName.touched"
                class="alert alert-danger"    
                >Email is required
            </div>




            <div class="form-group">
                <label>Phone</label>
                <input 
                type="phone" 
                class="form-control"
                #userPhone="ngModel" 
                [(ngModel)]="user.phone" name="phone" 
                minlength="10">
            </div>
            <!-- Phone validations -->
            <div 
                *ngIf="userPhone.errors?.minlength && userPhone.touched"
                class="alert alert-danger"    
                >Phone must be at least 10 characters
            </div>



            <input type="submit" value="Submit" class="btn btn-success">

            <!-- Add to list when form is submitted -->
            <ul class="list-group">
                <li *ngFor="let name of names" class="list-group-item">
                    {{ name }}
                </li>
            
            </ul>
            </form>

        </div>

    `
})

export class SandboxComponent {
    names:string[] = ['Bob', 'John', 'Sally'];
    user = {
        name: '',
        email: '',
        phone: ''
    }
    constructor() {
    }
    
    formSubmit({value, valid}) {
        console.log('form submitted');
        if(valid) {
            console.log('valid data: ', value);
            this.names.push(this.user.name);            
        } else {
            console.log('invalid data: ', value);
        }
    }

} // end class


