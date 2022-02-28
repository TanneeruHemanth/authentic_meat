import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  public results: any; // Change it private to public

  constructor() { }

  ngOnInit(): void {
  }

}

