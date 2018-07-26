import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsible-card',
  templateUrl: './collapsible-card.component.html',
  styleUrls: ['./collapsible-card.component.css']
})
export class CollapsibleCardComponent implements OnInit {
  @Input() title: string;
  visible: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    this.visible = !this.visible;
  }

}
