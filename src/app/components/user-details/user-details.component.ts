import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId:string;
  friendId:string;
  constructor(private route: ActivatedRoute,
    private router: Router) {

      /* 
        Note: To get the params, we invoke this.route.params, which returns an Observable
      */
      this.route.params
      .subscribe(
        (params:Params) => {
          console.log(params) ;
          // Extract all the id values
          let userId = params.userid;
          let friendId = params.friendid;
          console.log('userId: ', userId); 
          console.log('friendId: ', friendId); 
          
            this.userId = userId;
            this.friendId = friendId;

        })
  }

  ngOnInit() {
  }

}
