import { Component, OnInit, Input } from '@angular/core';
import { Step } from '../beans/Step';

@Component({
  selector: 'app-step-detail',
  templateUrl: './step-detail.component.html',
  styleUrls: ['./step-detail.component.css']
})
export class StepDetailComponent implements OnInit {

  @Input()
  num: number;

  @Input()
  step: Step;

  constructor() {
    this.num = 0;
    this.step = undefined;
  }

  ngOnInit() {
  }

}
