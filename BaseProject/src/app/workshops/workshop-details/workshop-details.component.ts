import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../shared/workshop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IWorkshop, ISession } from '..';

@Component({
  selector: 'app-workshopdetails',
  templateUrl: './workshop-details.component.html',
  styleUrls: ['./workshop-details.component.css']
})
export class WorkshopDetailsComponent implements OnInit {

  workshop: IWorkshop;
  addMode: boolean;
  constructor(private workshopService: WorkshopService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.workshop = this.workshopService.getEvent(
      +this.route.snapshot.params['id']
    );
  }

  editEvent() {
    console.log("Hit It");
  }

  handleEditWsClick(workshopName) {
    this.router.navigate(['/editworkshop', this.workshop.id]);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.workshop.sessions.map(s => s.id));
    session.id = nextId;
    this.workshop.sessions.push(session);
    this.workshopService.updateWorkshop(this.workshop);
    this.addMode = false;
  }

}
