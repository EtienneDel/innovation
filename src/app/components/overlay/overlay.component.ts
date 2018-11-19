import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent {

  constructor(public router: Router) { 

  }
}
