import { Component } from '@angular/core';
// import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  buttonclick: String = '';
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
    street: '',
    unit: '',
    city: '',
    state: ''
  };

  show() {
    this.buttonclick = 'Thank you for registering with us ' + this.user.firstName;
    this.buttonclick += '. We just sent you a confirmation email at ' + this.user.email + ', and we will send all mail to ';
    this.buttonclick += this.user.street + ' ' + this.user.unit + ', ' + this.user.city + ', ' + this.user.state + '. Have a wonderful day!';
  }
}

  // users = [];
  // user = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   confirm: '',
  //   street: '',
  //   unit: '',
  //   city: '',
  //   state: '',
  //   lucky: '',
  // };

  // onSubmit(){
  //   console.log("onSubmit()");
  //   console.log(this.user);
  //   this.users.push(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     password: '',
  //     confirm: '',
  //     street: '',
  //     unit: '',
  //     city: '',
  //     state: '',
  //     lucky: '',
  //   };
  // }
