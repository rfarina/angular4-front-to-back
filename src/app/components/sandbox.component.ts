import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h1>{{ name }}, age {{ age }}, knows {{ person.firstName }} {{person.lastName}}</h1>
        <h2>Person 2 is: {{person2.firstName}}, {{person2.lastName}}, who is {{person2.age}}</h2>
        <ul>
            <li>{{ showAge('current') }} </li>
            <li>{{ showAge('next') }} </li>
            <li>{{ object }} </li>
            <li>{{ arrayAny[0] }} </li>
            <li>{{ arrayAny[1] }} </li>
            <li>{{ arrayAny[2] }} </li>
            <li>{{ arrayAny[3] }} </li>
            <li>{{ myTuple }} </li>
            <li>{{ myTuple[0] }} </li>
            <li>{{ myTuple[1] }} </li>
            <li>{{ unusable }} </li>
            <li>{{ undef }} </li>
            <li>{{ n }} </li>
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
    object: any;
    arrayAny:any[] = ['1', 'Hello', 2, 'Goodbye'];
    myTuple: [string, number] = ["hello", 3];
    unusable: void = undefined;
    undef: undefined = undefined;
    n: null = null;

    constructor() {
        console.log('constructor ran', new Date().getTime());
        // this.hasBirthday();  // Causes problem, because age accessed at different times.
        // Seems like a "buffer" issue in angular

        this.object = 25;  // ok...
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
        }else if(which === 'next'){
            return this.age +1;
        }
    }

} // end class


interface Person {
    firstName: string,
    lastName: string,
    age: number
}