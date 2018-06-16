import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @ContentChild('contentPeregraph') peregraph: ElementRef;
  constructor() { }

  ngOnInit() {
  }

}
