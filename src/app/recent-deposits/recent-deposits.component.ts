import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-deposits',
  templateUrl: './recent-deposits.component.html',
  styleUrls: ['./recent-deposits.component.css']
})
export class RecentDepositsComponent implements OnInit {

  recentDeposit: string = '$3,024.00'
  todayDate = new Date().toDateString();

  constructor() { }

  ngOnInit(): void {
  }

}
