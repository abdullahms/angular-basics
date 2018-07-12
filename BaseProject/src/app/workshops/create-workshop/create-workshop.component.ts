import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkshopService } from '../shared/workshop.service';

@Component({
  selector: 'app-create-workshop',
  templateUrl: './create-workshop.component.html',
  styleUrls: ['./create-workshop.component.css']
})
export class CreateWorkshopComponent implements OnInit {

  isDirty: boolean = true;
  constructor(private router: Router, private workshopService: WorkshopService) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/workshops']);
  }

  saveEvent(formValues) {
    this.workshopService.saveWorkshop(formValues);
    this.isDirty = false;
    this.router.navigate(['/workshops']);
  }
}
