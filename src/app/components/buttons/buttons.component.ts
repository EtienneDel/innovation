import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  constructor(public router: Router) { 

  }
}
