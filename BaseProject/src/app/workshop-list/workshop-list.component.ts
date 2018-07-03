import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../shared/workshop.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  // selector: 'workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})

export class WorkshopListComponent implements OnInit {
  workshops: any[];


  constructor(private workshopService: WorkshopService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.workshops = this.workshopService.getWorkshops();
  }

  handleThumbnailClicked(workshopName) {
    this.toastr.success(workshopName);
  }
}

