import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../service/messages.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

alertClass: string = "alert-dismissible fade show";
isDisplayed = true;
message: string = "Erreur 404";

  constructor(private msService: MessagesService) { }

  ngOnInit() {
    this.msService.displayErrorMessage("Sorry page not found");
    console.log("pagenotfound.component.ts");
  }

}
