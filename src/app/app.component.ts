import { Component} from '@angular/core';
import { CardService } from './services/card.service';
import { Card } from './models/card';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'cards-anotaai';
  cards: Card[] = [];
  filtered: Array<any> = [];

  queryField = new FormControl();
  limpar: boolean = false;

  constructor(private cardService: CardService) {
    this.getAllCards();
   }
   
 ngOnInit(){
    
  }

  getAllCards() {
    this.cardService.getCards().subscribe((cards: Card[]) => {
      this.cards = cards;
    });
    
  }

  deleteCard(i: number) {
    this.cards.splice(i, 1);
  }

  onSearch(){
    let value = this.queryField.value
   this.filtered = this.cards.filter((card)=>{
      return(
        card.title.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1 || 
        card.description.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1
      )
    });
    this.cards = this.filtered;
    this.limpar = true;
  }

  limparFiltro(){
    this.getAllCards();
    this.limpar = false;
  }
}
