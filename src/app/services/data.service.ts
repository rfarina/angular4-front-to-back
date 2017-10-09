/* 
    Objective: Create an observable and return our data
    as a stream. 
*/

import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/filter';



@Injectable()
export class DataService{
    data: Observable<Array<any>>;
    numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

    constructor() {

    }

    /* 
        This function will return data every second except for
        the first push of data, which will be synchronous. We will 
        implement this by creating an observable, and using a 
        timer to return the asynch data over a period of 5 seconds,
        when the observable completes.
    */
    getData() {
        this.data = new Observable(observer => {
            observer.next(['here is your synchronous data']);
            setTimeout(() => {
                observer.next([1]);
            }, 1000);

            setTimeout(() => {
                observer.next([2]);
            }, 1000);

            setTimeout(() => {
                observer.next([3]);
            }, 1000);

            setTimeout(() => {
                observer.next(['hello']); // this should generate an error for the subscriber
            }, 1000);

            setTimeout(() => {
                observer.complete();
            }, 1000);

        })        
        return this.data;
        
    }

    getNumbers() {

        let source = Observable.create(observer => {
            let index = 0;
            let produceValue = () => {
                observer.next(this.numbers[index++]);

                if(index === 30000) {
                    observer.error('Something went wrong');
                }
                if(index < this.numbers.length) {
                    setTimeout(produceValue, 250);
                }else {
                    observer.complete();
                }
            }

            // Invoke the function
            produceValue();

        })
        .map(n => n *2)
        .filter(n => n >= 6)
        .count();
        // .filter(n => n === 6);
        

        // return the observable
        return source;
    }




} // end class