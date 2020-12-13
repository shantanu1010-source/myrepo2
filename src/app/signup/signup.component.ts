import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
firstName=''
lastName=''
email=''
phone=''
address=''

  constructor() { }

  ngOnInit(): void {
  }
onSignup(){
console.log(`firstName:${this.firstName}`)
console.log(`firstName:${this.lastName}`)
console.log(`firstName:${this.email}`)
console.log(`firstName:${this.address}`)
}
onCancel(){
this.firstName=''
this.lastName=''
this.email=''
this.address=''
this.phone=''
}
}
