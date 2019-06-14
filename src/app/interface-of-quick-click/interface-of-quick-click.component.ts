import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface-of-quick-click',
  templateUrl: './interface-of-quick-click.component.html',
  styleUrls: ['./interface-of-quick-click.component.css']
})
export class InterfaceOfQuickClickComponent implements OnInit {
  value = 'orderInStore';
  constructor() { }

  ngOnInit() {
  }

}
