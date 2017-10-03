import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h1>{{ name }}, age {{ age }}, knows {{ person.firstName }} {{person.lastName}}</h1>
        <h2>Person 2 is: {{person2.firstName}}, {{person2.lastName}}, who is {{person2.age}}</h2>
        <ul>
            <li>{{ showAge('current') }} </li>
            <li>{{ showAge('nextbday') }} </li>
            </ul>
    
    `
})

export class SandboxComponent implements OnInit   {
    name: string = "John Doe";
    age: number = 35;
    person = {
        firstName: 'Rick',
        lastName: 'Farina'
    }
    person2: Person;

    constructor() {
        console.log('constructor ran', new Date().getTime());
        this.hasBirthday();
    }

    ngOnInit() {
        this.person2 = {
            firstName: "Bob",
            lastName: "Smith",
            age: 45
         }
        
         console.log('ngOnInit ran', new Date().getTime());
         
    } // end NgOnInit

    hasBirthday(){
        this.age++;
    }

    showAge(which:string) {
        if(which === 'current'){
            return this.age;
        }else {
            return ++this.age;
        }
    }

} // end class


interface Person {
    firstName: string,
    lastName: string,
    age: number
}