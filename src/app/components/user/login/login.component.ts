import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/userService.client';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  //properties
  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  // TODO : fix authentication using pasport

  constructor(private router: Router, private _userService: UserService){ }

  ngOnInit() {}

  login() {

    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    // calling client side userservice to send login information
    this._userService.login(this.username, this.password)
      .subscribe(
        (data: any) => {
            localStorage.setItem('user', JSON.stringify(data));
            this.errorFlag = false;
            this.router.navigate(['/profile'])},
        (error: any) => this.errorFlag = true
      );
  }
}
