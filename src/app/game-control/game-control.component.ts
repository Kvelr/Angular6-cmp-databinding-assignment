import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startEvent = new EventEmitter<{ counter: number }>();
  countNumber = 0;
  interval;
  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.startEvent.emit({
        counter: this.countNumber++
      });
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }
}
