import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introducing',
  templateUrl: './introducing.component.html',
  styleUrls: ['./introducing.component.css']
})
export class IntroducingComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
