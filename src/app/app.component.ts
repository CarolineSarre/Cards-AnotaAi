import { Component } from '@angular/core';
import { CardService } from './services/card.service';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cards-anotaai';
  cards: Card[] = [];

  constructor(private cardService: CardService) {
    this.getAllCards();
   }
  NgOnInit(){

  }

  getAllCards() {
    this.cardService.getCards().subscribe((cards: Card[]) => {
      this.cards = cards;
    });
    
  }

  deleteCard(i: number) {
    this.cards.splice(i, 1);
  }
}
