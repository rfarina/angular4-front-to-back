import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'sandbox',
    template:`
        <h1>Hello World</h1>
        {{people}}
        <ul>
            <li *ngFor="let person of people">
                {{ person }}
            </li>
        </ul>
        <ul>
            <li *ngFor="let person of people; let i = index">
            {{ i + 1 }} {{ person }}
        </li>
    </ul>

    <h2>People</h2>
    <ul>
        <li *ngFor="let person of people2">
        {{ person.firstName }}, {{ person.lastName }}
    </li>
</ul>


`,
    styleUrls: ['./sandbox.component.css'] 
})

export class SandboxComponent {
    people = ['Rick', 'Daryl', 'Carl', 'Glen'];
    people2 = [
        {
            firstName: 'Rick',
            lastName: 'Farina'
        },
        {
            firstName: 'John',
            lastName: 'Doe'
        },        {
            firstName: 'Bob',
            lastName: 'Smith'
        }
    ]

    constructor() {
        this.people[2] = 'Carol';
    }
} // end class


