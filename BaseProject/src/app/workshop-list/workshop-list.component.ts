import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../shared/workshop.service';

@Component({
  selector: 'workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})
export class WorkshopListComponent implements OnInit {
  workshops: any[];

  constructor(private workshopService: WorkshopService) { }

  ngOnInit() {
    this.workshops = this.workshopService.getWorkshops();
  }
}
