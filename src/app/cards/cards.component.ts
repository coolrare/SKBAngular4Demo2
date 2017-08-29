import { Component, OnInit } from '@angular/core';
import { ViewBagService } from '../view-bag.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(public ViewBag: ViewBagService) { }

  ngOnInit() {
    this.ViewBag['title'] = 'Cards';
  }

}
