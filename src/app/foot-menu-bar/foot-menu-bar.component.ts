import { OrderFormComponent } from './../order-form/order-form.component';
import { MatDialog } from '@angular/material/dialog';
import { NetService } from './../service/net.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot-menu-bar',
  templateUrl: './foot-menu-bar.component.html',
  styleUrls: ['./foot-menu-bar.component.css']
})
export class FootMenuBarComponent implements OnInit {

  constructor(private NetService: NetService, private MatDialog: MatDialog) { }

  ngOnInit() {
  }
  public Book() {
    this.MatDialog.open(OrderFormComponent, { width: "95%" })
  }

  public BookSuccessful() {

  }
}
