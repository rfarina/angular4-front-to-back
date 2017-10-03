import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'sandbox',
    template:`
    <!-- 3 Ways to bind properties -->
    <h2>Hello from Sandbox</h2>
    <div><img src="{{ imageUrl }}"></div>
    <div><img [src]="imageUrl"></div>
    <div><img bind-src="imageUrl"></div>

    <h4>Image location: <span [textContent]="imageUrl"></span></h4>
    <hr>

    <!-- Controlling UI via hidden and disabled attributes -->
    <h2>Create Post</h2>
    <!-- The following paragraph will be hidden if "isSaved" === true -->
    <p [hidden]="isSaved">Post has changed, please save...</p>
    <!-- The following button will be disabled if "isSaved" === true -->
    <button [disabled]="isSaved" (click)="savePost()">Save</button>

    `
})

export class SandboxComponent {
    imageUrl: string = 'http://lorempixel.com/400/200';
    isSaved: boolean = false;


    constructor() {

    }

    savePost() {
        this.isSaved = true;
    }
} // end class


