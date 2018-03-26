import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { InfosBook } from '../model/InfosBook';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(
    private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService) { }

  title = "book"
  public book = {};
  Books: InfosBook[];

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.backService.GetBooks(this.Books).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //cache the logged member in datashare service
          this.Books = data.payload;

        }
      },
    );
  };

}
