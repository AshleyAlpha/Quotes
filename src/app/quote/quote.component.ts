import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Never regret anything that made you smile.', 'smile is the best make up that a female can wear'),
    new Quote(2, 'Change the world by being yourself.', 'being your self helps to discover your self'),
    new Quote(3, 'Every moment is a fresh beginning.', 'absolutely yees!'),
    new Quote(4, 'Love For All, Hatred For None.', 'its better to love all people bcz they are Jehovahs creations'),
  ]
  constructor() { }

  ngOnInit() {
  }

}
