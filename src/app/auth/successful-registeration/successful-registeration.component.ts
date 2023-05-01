import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful-registeration',
  templateUrl: './successful-registeration.component.html',
  styleUrls: ['./successful-registeration.component.scss']
})

export class SuccessfulRegisterationComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }
  signIn()
  {
    this._Router.navigate(['/login'])
  }
}
