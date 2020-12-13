import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  firstName = ''
  lastName = ''
  address = 'this shantanus world'
  phone = ''
  email = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSignup() {
    console.log(`first name: ${this.firstName}`)
    console.log(`last name: ${this.lastName}`)
    console.log(`address: ${this.address}`)
    console.log(`phone: ${this.phone}`)
    console.log(`email: ${this.email}`)
  }

  onCancel() {
    this.firstName = ''
    this.lastName = ''
    this.address = ''
    this.phone = ''
    this.email = ''
  }

}
