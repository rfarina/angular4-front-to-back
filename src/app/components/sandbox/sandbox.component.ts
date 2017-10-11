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
    data: any[] = [];
    names: string[] = ['Callie', 'Rick'];
    users: User[] = [];
    // user = {
    //     name: '',
    //     email: '',
    //     phone: ''
    // }
    user: User = {
        id: '',
        name: '',
        email: '',
        phone: ''
    }
    isEdit: Boolean = false;


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
            (value: number) => console.log(`value is ${value}`),

            (err) => console.log(`Error: ${err}`),

            () => { console.log('complete') }
            )
    }

    // getClicksOnDocument() {
    //     let clicks = Observable.fromEvent(document, 'click');
    //     clicks.subscribe(
    //         (evt) => console.log(evt)
    //     );


    // }

    getNames() {
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

    addUpdUser() {
        console.log('user to add: ', this.user);
        if (this.isEdit) {
            // Update user
            this.dataService.updUser(this.user)
            .subscribe(
            user => {
                console.log('Response from Put: ',user);
                // loop thru to delete the user, then add it back
                // based on response
                for (let i = 0; i < this.users.length; i++) {
                    if (this.users[i].id === user.id) {
                        this.users.splice(i, 1);
                    }
                }
                // Add the new user back
                this.users.unshift(user);
            }
        )

        } else {
            // Add User
            this.dataService.addUser(this.user)
                .subscribe(
                user => {
                    console.log('user added: ', user);
                    this.users.unshift(user)
                },
                error => console.log('error: ', error)
                )
        }
    }

    updUser(user) {
        // alert(user.id);
        // Set edit to true
        this.isEdit = true;
        this.user = user; // populate bound ui fields
        let button = document.getElementById('btnAddUpd');
        console.log(button);
        button.textContent = 'Update User';
    }
    dltUser(id) {
        // alert(id);
        this.dataService.dltUser(id)
            .subscribe(
            res => {
                console.log('delete resp: ', res);
                // Because we are using 'dummy' data, delete does not take place
                // on database. So, loop thru and delete to update the ui
                for (let i = 0; i < this.users.length; i++) {
                    if (this.users[i].id === id) {
                        this.users.splice(i, 1);
                    }
                }
            }
            )

    }



} // end class

interface User {
    id: string,
    name: string,
    email: string,
    phone: string
}
