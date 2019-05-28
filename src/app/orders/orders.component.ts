import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexModalService } from '../shared-components/flex-modal/flex-modal.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  orders: Array<any> = [];

  constructor(
    private router: Router,
    private flexModal: FlexModalService,
    private http: Http
  ) {

  }

  async ngOnInit() {
    this.loadSavedOrders();
  }



  // Calculate total and perform input validation

  // Clear the orders form

  // Add items 'P414', 'T208' and 'B101' to list when corresponding button is clicked

  // delete line item (order) when delete button is click

  // read in the orders.json file and populate the list table with the initial orders (3)
  loadSavedOrders() {
    this.savedOr = [{
      'pid': 'P414',
      'description': '1/4 Pipe',
      'price': 12.00,
      'inventory': 30,
      'quantity': 2
    }, {
      'pid': 'T208',
      'description': '3/8 T Joint',
      'price': 64.00,
      'inventory': 74,
      'quantity': 0
    }, {
      'pid': 'B101',
      'description': 'Break Disk A',
      'price': 85.00,
      'inventory': 98,
      'quantity': 2
    }];

  }
  clearOrders() {
  }
}
