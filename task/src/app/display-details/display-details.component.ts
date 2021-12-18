import { Component, OnInit } from '@angular/core';
import { LogMessage } from "./LogMessage";

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})

export class DisplayDetailsComponent implements OnInit {
  title = 'task';
  log = [];

  isDisplayDetails = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayDetailsClick(event: PointerEvent) {
    this.isDisplayDetails = true;

    //console.log(event);
    let date: Date = new Date();
    let message: string = 'Mouse click on Display Detail button. Mouse coordinates: ' + event.x + ', ' + event.y;

    this.log.push(new LogMessage(date, message));
  }
}
