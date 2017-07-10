import { Component, OnInit } from '@angular/core';

import {UserService} from '../../../services/userService.client';
import {Router, ActivatedRoute} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //properties
  username : String;
  password : String;
  errorFlag : boolean;
  errorMsg = 'Invalid username or password !';

  testresult: String;

  // TODO : fix this
  // login(username, password){
  //   this._userService.login(username, password);
  // }


  constructor(private route: ActivatedRoute, private router: Router, private _userService: UserService ){ }

  ngOnInit() {
  }


  login() {
    // this.router.navigate(['./profile'], {relativeTo: this.route});

    this._userService.login(this.username, this.password)
      .subscribe(
        (data: any) => {
            localStorage.setItem('user', JSON.stringify(data)),
            this.errorFlag = false,
            this.router.navigate(['/profile'])},
        (error: any) => this.errorFlag = true
      );

      // .then(data => {
      //   console.log("response at login compo: ", data);
      //   //this.testresult = data['_body'];
      //
      //   this.router.navigate(['/profile']);
      // });

  }

}