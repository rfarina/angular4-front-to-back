import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';



@Component({
    selector: 'sandbox',
    template:`
    <!-- Using Service -->
    <h2>Hello from Sandbox</h2>


    `
})

export class SandboxComponent {
    users:string[];

    constructor(dataService: DataService) {
        this.users = dataService.getUsers();
        console.log('users', this.users);

    }
    

} // end class


