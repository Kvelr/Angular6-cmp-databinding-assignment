import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  OddNumberElements: number[] = [];
  EvenNumberElements: number[] = [];

  onStartEventAdded(startEventData: { counter: number }) {
    if (startEventData.counter % 2 === 0) {
      this.EvenNumberElements.push(startEventData.counter);
    } else {
      this.OddNumberElements.push(startEventData.counter);
    }

  }
}
