import { Component, OnInit } from '@angular/core';
import { WhmcsService } from '../whmcs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clientDetails: any;

  constructor(private whmcsService: WhmcsService) {}

  ngOnInit() {
    const clientId = localStorage.getItem('clientId');
    if (clientId) {
      this.whmcsService.getClientDetails(clientId).subscribe(response => {
        this.clientDetails = response;
      });
    }
  }
}
