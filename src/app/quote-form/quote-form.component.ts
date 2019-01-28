import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newquote = new Quote(0, "", "", new Date());
  @Output() addquote = new EventEmitter<Quote>();

  submitGoal() {
    this.addquote.emit(this.newquote);
  }
  constructor() { }

  ngOnInit() {
  }

}
