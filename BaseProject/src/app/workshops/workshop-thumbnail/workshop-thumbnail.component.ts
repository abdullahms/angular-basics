import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWorkshop } from '..';

@Component({
  selector: 'workshop-thumbnail',
  templateUrl: './workshop-thumbnail.component.html',
  styleUrls: ['./workshop-thumbnail.component.css']
})
export class WorkshopThumbnailComponent implements OnInit {

  @Input() workshop: IWorkshop;

  constructor() { }

  ngOnInit() {
  }

}
