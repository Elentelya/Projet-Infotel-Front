import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { InfosBook } from '../model/InfosBook';
import { Search } from '../model/Search';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  input:string;

  searchTerm: Search = {
    title: ""
  };
  
  Books: InfosBook[];

  constructor(
    private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService) { }

  ngOnInit() {
  }

  search() {
console.log("recherche mots " + JSON.stringify(this.searchTerm));
console.log("recherche mots " + this.input);

    this.backService.Search(this.searchTerm).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          this.Books = data.payload;
        }
      },
      error => {
        console.error(error.message);
        //messageService.displayFailureMessage(error.message);
      }
    );
  }

}
