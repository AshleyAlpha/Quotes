import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Ashleys short life Quotes'
  quotes = [
    new Quote(1, 'Never regret anything that made you smile.', 'smile is the best make up that a female can wear', new Date(2018, 3, 14)),
    new Quote(2, 'Change the world by being yourself.', 'being your self helps to discover your self', new Date(2018, 3, 14)),
    new Quote(3, 'Every moment is a fresh beginning.', 'absolutely yees!', new Date(2018, 3, 14)),
    new Quote(4, 'Love For All, Hatred For None.', 'its better to love all people bcz they are Jehovahs creations', new Date(2018, 3, 14)),

  ]
}
