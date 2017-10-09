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
    template:`
    <!-- Using Service that returns an Observable -->
    <h2>Hello from Sandbox</h2>
    <ul class="list-group">
        <li class="list-group-item" *ngFor="let d of data">{{ d }}</li>
    </ul>
    <hr>
    <button (click)="getNumbers()">Get Numbers</button>
    `
})

export class SandboxComponent {
    data:any[] = [];
    names:string[] = ['Callie', 'Rick'];


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

        this.getClicksOnDocument();

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

    getClicksOnDocument() {
        let clicks = Observable.fromEvent(document, 'click');
        clicks.subscribe(
            (evt) => console.log(evt)
        );


    }

    getNames(){
        let names = Observable.of(this.names);
        names.subscribe(
            (name) => console.log(name)
        )
    }
} // end class


