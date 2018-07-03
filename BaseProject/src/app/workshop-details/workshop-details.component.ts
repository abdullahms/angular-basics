import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../shared/workshop.service';

@Component({
  selector: 'app-workshopdetails',
  templateUrl: './workshop-details.component.html',
  styleUrls: ['./workshop-details.component.css']
})
export class WorkshopDetailsComponent implements OnInit {

  workshop: any;
  constructor(private workshopService: WorkshopService) { }

  ngOnInit() {
    this.workshop = this.workshopService.getEvent(1);
  }

}
