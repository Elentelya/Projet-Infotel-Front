import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { InfosBook } from '../model/InfosBook';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(
    private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService) { }

  imgPath = "popularBook.jpg"
  title = "populaires"
  accroche = "Retrouvez ici les coups de coeur du moment";

  public book = {};

  ngOnInit() {
    this.getPopularBook();
  }

  popularBooks: InfosBook[];

  getPopularBook() {
    this.backService.GetPopularBook(this.popularBooks).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //cache the logged member in datashare service
          this.popularBooks = data.payload;
          
        }
      },
    );
  };
}