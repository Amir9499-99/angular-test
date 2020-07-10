import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
  date;
  name: string;
  shipTo: string;
  paymentMethod: string;
  saleAmount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { date: new Date().toDateString(), name: 'Elvis Presley', shipTo: 'Sherman Oaks, CA', paymentMethod: 'VISA', saleAmount: 300 },
  { date: new Date().toDateString(), name: 'Paul McCrtney', shipTo: 'Beverly Hills, CA', paymentMethod: 'VISA', saleAmount: 300 },
  { date: new Date().toDateString(), name: 'Tom Scholz', shipTo: 'Plymouth, MN', paymentMethod: 'VISA', saleAmount: 300 },
  { date: new Date().toDateString(), name: 'Michael Jackson', shipTo: 'Devnver, CO', paymentMethod: 'VISA', saleAmount: 300 },
  { date: new Date().toDateString(), name: 'Bruce Lee', shipTo: 'New York, NY', paymentMethod: 'VISA', saleAmount: 300 },
  { date: new Date().toDateString(), name: 'Jet Lee', shipTo: 'Salt Lake City, UT', paymentMethod: 'VISA', saleAmount: 300 },
  { date: new Date().toDateString(), name: 'Jacky Chan', shipTo: 'Glendale, CA', paymentMethod: 'VISA', saleAmount: 300 },
  { date: new Date().toDateString(), name: 'Donald Trump', shipTo: 'San Francisco, CA', paymentMethod: 'VISA', saleAmount: 300 },
  { date: new Date().toDateString(), name: 'Barak Obama', shipTo: 'Miami, FL', paymentMethod: 'VISA' , saleAmount: 300},
  { date: new Date().toDateString(), name: 'Jason Statham', shipTo: 'Austin, TX', paymentMethod: 'VISA' , saleAmount: 300},
];

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.css'],
})
export class RecentOrdersComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ['date', 'name', 'shipTo', 'paymentMethod', 'saleAmount'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {}
}
