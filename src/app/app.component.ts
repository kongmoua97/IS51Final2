import { Component, OnInit } from '@angular/core';
import { FlexModalService } from './shared-components/flex-modal/flex-modal.service';
import { Router } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  aboutText = 'Created by Kong Moua 2019';

  constructor(private flexModal: FlexModalService, private router: Router) { }

  ngOnInit() {
  }

  // Launch flex modal or alert (3pts reduced) showing about text
  showHelpText() {
  this.flexModal.openDialog('about-modal');
  }

  navigateTo(path: string) {
    this.router.navigate(['orders']);
  }