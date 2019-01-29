import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, '"Never regret anything that made you smile."', 'smile is the best make up that a female can wear', new Date(2018, 3, 14)),
    new Quote(2, '"Change the world by being yourself."', 'being your self helps to discover your self', new Date(2018, 3, 14)),
    new Quote(3, '"Every moment is a fresh beginning."', 'absolutely yees!', new Date(2018, 3, 14)),
    new Quote(4, '"Love For All, Hatred For None."', 'its better to love all people bcz they are Jehovahs creations', new Date(2018, 3, 14)),
  ]
  deletequote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }

  }
  addNewquote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

  }
  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  ngOnInit() { }
}