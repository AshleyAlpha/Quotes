import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Quotes'
  quotes = [
    new Quote(1, 'Never regret anything that made you smile.', ''),
    new Quote(2, 'Change the world by being yourself.', ''),
    new Quote(3, 'Every moment is a fresh beginning.', ''),
    new Quote(4, 'Love For All, Hatred For None.', ''),

  ]
}
