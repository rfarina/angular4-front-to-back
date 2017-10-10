import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscriber } from 'rxjs/Subscriber';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import * as Rx from 'rxjs';



@Component({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html'
})

export class SandboxComponent {
    data:any[] = [];
    names:string[] = ['Callie', 'Rick'];
    users:User[] = [];
    // user = {
    //     name: '',
    //     email: '',
    //     phone: ''
    // }
    user:User = {
        name: '',
        email: '',
        phone: ''
    }

    constructor(public dataService: DataService) {
        console.log('before');
        var subscription = dataService.getData()       // returns observable
        .subscribe(
            (data) => {
                console.log(data);
                this.data.push(data);
            },
            (err) => {
                console.log(err);
                subscription.unsubscribe();
            },
            () => {
                subscription.unsubscribe();
            }
        
        ); // end subscribe
        console.log('after');

        // this.getClicksOnDocument();

        this.getNames();
    } // end constructor
    
    getNumbers() {
        this.dataService.getNumbers()
        .subscribe(
            (value:number) => console.log(`value is ${value}`),
            
            (err) => console.log(`Error: ${err}`),

            () => {console.log('complete')}
        )
    }

    // getClicksOnDocument() {
    //     let clicks = Observable.fromEvent(document, 'click');
    //     clicks.subscribe(
    //         (evt) => console.log(evt)
    //     );


    // }

    getNames(){
        let names = Observable.of(this.names);
        names.subscribe(
            (name) => console.log(name)
        )
    }

    getUsers() {
        // alert('Getting users');
        this.dataService.getUsers()
        .subscribe(
            users => {
                console.log('users: ', users);
                this.users = users;
                console.log('this.users array: ', this.users);
            },
            error => console.log('http error: ', error)
        );
    }

    addUser() {
        console.log('user to add: ', this.user);
        this.dataService.addUser(this.user)
        .subscribe(
            user => {
                console.log('user added: ', user);
                this.users.unshift(user)},
            error => console.log('error: ', error)
        )
    }
} // end class

interface User {
    name:string,
    email:string,
    phone:string
}
